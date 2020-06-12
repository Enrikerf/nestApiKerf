import {MinLength,MaxLength, IsString} from "class-validator";

export class UserDto{
    @MinLength(2)
    @MaxLength(16)
    @IsString()
    readonly name:string;
}