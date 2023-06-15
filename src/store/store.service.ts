import { Inject, Injectable } from '@nestjs/common';
import { UserDto } from 'src/dto/user.dto';
import { STORE_CONFIG, StoreConfig2 } from './store.module';
import * as fs from 'fs';
import { StoreConfig } from './store-root.config';

@Injectable()
export class StoreService {
  constructor(@Inject(STORE_CONFIG) private readonly config: StoreConfig) {
    if (!fs.existsSync(this.config.dirname)) {
      fs.mkdirSync(this.config.dirname);
    }
  }
  getUser(user: UserDto): void {
    fs.appendFileSync(
      `${this.config.dirname}/${this.config.filename}`,
      JSON.stringify(user),
    );
    // return user;
  }
}
