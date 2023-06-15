import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  createUser(user: UserDto): UserDto {
    user.id = 1;
    user.createAt = new Date();
    user.updateAt = new Date();
    const userReal = UserDto.plainToClass(user);
    return userReal;
  }
}
