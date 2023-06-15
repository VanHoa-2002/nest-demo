import { Injectable, Scope } from '@nestjs/common';

@Injectable({
  scope: Scope.REQUEST,
})
export class LoggerService {
  cout = 0;
  log(): number {
    this.cout++;
    return this.cout;
  }
}
