import { MinLength, MaxLength, IsString, IsOptional } from 'class-validator';

export class UserDto {
  @IsOptional()
  @MinLength(2)
  @MaxLength(16)
  @IsString()
  readonly name: string;

  @IsOptional()
  @MinLength(2)
  @MaxLength(16)
  @IsString()
  readonly lastName: string = null;
}
