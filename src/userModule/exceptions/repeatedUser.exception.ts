import { ForbiddenException } from '@nestjs/common';

export class repeatedUserException extends ForbiddenException {
  constructor( msg) {
    super(msg);
  }
}
