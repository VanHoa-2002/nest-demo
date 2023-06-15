import { Expose, plainToInstance } from 'class-transformer';
export abstract class BaseDto {
  @Expose()
  id: number;
  @Expose()
  createAt: Date;
  @Expose()
  updateAt: Date;
  static plainToClass<T>(this: new (...args: any[]) => T, obj: T): T {
    console.log(this, 'ok');
    return plainToInstance(this, obj, { excludeExtraneousValues: true });
  }
}
