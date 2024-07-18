import { Prisma } from "@prisma/client";
import { Type } from "class-transformer";
import { IsBase64, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";
import { CheckDto } from "src/modules/checks/dto/checks.dao";
import { isStringObject } from "util/types";

export class GoalDto {

    id?: number

    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    description: string
    
    @ValidateNested({ each: true })
    @Type(() => CheckDto)
    checks: CheckDto[]
    
    @IsNumber()
    @IsOptional()
    amount: number

    @IsString()
    image_url: string

    @IsNumber()
    target_amount: number

    percentage?: number

    toGoalCreateInput(): Prisma.GoalCreateInput | any {
        return {
            name: this.name,
            description: this.description,
            percentage: 0,
            amount: this.amount,
            target_amount: this.target_amount,
            checks: this.checks
        }
    }
}
