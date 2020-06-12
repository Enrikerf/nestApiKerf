import { User } from './../models/user.interface';
import { ForbiddenException } from '@nestjs/common';

export class repeatedUserException extends ForbiddenException {
  constructor({ id, name }: User) {
    const msg = `The user: ${id} with name ${name} already exists`;
    super(msg);
  }
}
