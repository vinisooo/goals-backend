import { IsBoolean, IsString } from "class-validator";

export class CheckDto {
    
    @IsString()
    name: string

    @IsBoolean()
    checked: boolean
}
