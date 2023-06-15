import { Expose, Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, Length, isPhoneNumber } from 'class-validator';
import { BaseDto } from './baseDto.dto';
export class UserDto extends BaseDto {
  @IsNotEmpty()
  @IsEmail()
  @Expose()
  email: string;
  @Length(10, 20)
  @Expose()
  pass: string;
  @Transform(({ obj }) => {
    return obj.email + obj.pass;
  })
  @Expose()
  fullName: string;
}
