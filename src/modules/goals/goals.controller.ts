import { BadRequestException, Body, Controller, Get, HttpCode, NotFoundException, Param, Post, UploadedFile, UseInterceptors, ValidationPipe } from '@nestjs/common';
import { GoalsService } from './goals.service';
import { GoalDto } from './dto/goals.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileService } from 'src/services/file/file.service';

@Controller('goals')
export class GoalsController {
    constructor(private readonly goalsService: GoalsService, private readonly fileService: FileService) {}

    @Post()
    async createGoal(
        @Body(new ValidationPipe({transform: true})) body: GoalDto
    ) {
        const uploadedImage = await this.fileService.uploadImage(body.image_url, 'goals')
        const imageUrl = uploadedImage.secure_url

        if(!imageUrl) {
            throw new BadRequestException('Invalid image_url')
        }

        const data = body.toGoalCreateInput()
        const createdGoal = await this.goalsService.createGoal(data)
        return {...createdGoal, image_url: imageUrl}
    }

    @Get()
    async getGoals () {
        const foundGoals = this.goalsService.getGoals()
        return foundGoals
    }

    @Get(':goalId')
    async getGoalById (@Param('goalId') goalId: number) {
        const numGoalId = Number(goalId)
        if(isNaN(numGoalId)) throw new BadRequestException('Invalid group_id')

        const foundGoal = await this.goalsService.getGoalById(numGoalId)
        if(!foundGoal) throw new NotFoundException('Goal not found')

        return foundGoal
    }
}
