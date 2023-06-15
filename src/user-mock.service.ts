import { UserDto } from './dto/user.dto';

export class UserMockService {
  createUser(user: UserDto): UserDto {
    return {
      pass: '123',
      id: 2,
      email: 'mock email',
      createAt: new Date(),
      updateAt: new Date(),
      fullName: 'ahhaha',
    };
  }
}
