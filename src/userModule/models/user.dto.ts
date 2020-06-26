import {MinLength,MaxLength, IsString, IsOptional} from "class-validator";
import { isNull } from "util";


export class UserDto{
    @IsOptional()
    @MinLength(2)
    @MaxLength(16)
    @IsString()
    readonly name:string;

    @IsOptional()
    @MinLength(2)
    @MaxLength(16)
    @IsString()
    readonly lastName:string = null;
}