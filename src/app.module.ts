import { Module, Optional } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user.service';
import { UserMockService } from './user-mock.service';
import { Iuser } from './dto/user.interface';
import { StoreService } from './store.service';
import { StoreModule } from './store/store.module';
import { PostModule } from './post/posst.module';
import { LoggerService } from './logger/logger.service';

const appConfig = { name: 'default', key: 123 };
function storSer(config): StoreService {
  return new StoreService();
}
@Module({
  imports: [StoreModule.forFeature({ filename: 'file.json' }), PostModule],
  controllers: [AppController],
  providers: [
    AppService,
    LoggerService,
    {
      provide: UserService,
      useClass: UserService,
    },
    {
      provide: 'APP_CONFIG',
      useValue: appConfig,
    },
    {
      provide: 'APP_USER',
      useValue: {
        path: 'store',
        dir: 'haha',
      } as Iuser,
    },
    {
      provide: 'STORE_SERVICES',
      useFactory: storSer,
      inject: [{ token: 'APP_USER', optional: true }], // thêm param cho factory
    },
  ],
})
export class AppModule {}
