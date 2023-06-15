import { DynamicModule, Module } from '@nestjs/common';
import { StoreService } from './store.service';
import {
  StoreConfig,
  StoreFeatureConfig,
  StoreRootConfig,
} from './store-root.config';

export interface StoreConfig2 {
  dirnam: string;
  filename: string;
}
let rootStoreCongfig: StoreConfig;
export const STORE_CONFIG = 'STORE_CONFIG2';
const DEFAULT_STORE_DIRNAME = 'store';
const DEFAULT_FILE_NAME = 'data.json';
@Module({
  providers: [StoreService],
  exports: [StoreService],
})
class RootStoreModule {}
@Module({})
export class StoreModule {
  static forRoot(storeConfig?: StoreRootConfig): DynamicModule {
    rootStoreCongfig = StoreModule.createConfig(storeConfig);

    return {
      module: RootStoreModule,
      providers: [
        {
          provide: STORE_CONFIG,
          useValue: rootStoreCongfig,
        },
      ],
    };
  }
  static forFeature(featureConfig: StoreFeatureConfig): DynamicModule {
    const token = 'STORE_SERVICE' + featureConfig.filename;
    return {
      module: StoreModule,
      providers: [
        {
          provide: token,
          useFactory: () => {
            const feature = StoreModule.createConfig({
              ...rootStoreCongfig,
              ...featureConfig,
            });
            return new StoreService(feature);
          },
        },
      ],
      exports: [token],
    };
  }
  private static createConfig(config: StoreConfig): StoreConfig {
    const defautConfig: StoreConfig = {
      dirname: DEFAULT_STORE_DIRNAME,
      filename: DEFAULT_FILE_NAME,
    };
    return { ...defautConfig, ...config };
  }
}
