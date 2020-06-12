import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from "@nestjs/common";

@Injectable()
export class ParseIntPipe implements PipeTransform<string,number>{
    transform(value: string, metadata: ArgumentMetadata): number {
        const parsedValue = parseInt(value,10)
       if(!parsedValue){
           throw new BadRequestException('validation error string to number');
       }return parsedValue;
    }

}