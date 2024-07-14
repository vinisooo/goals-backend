import { BadRequestException, Body, Controller, Get, HttpCode, NotFoundException, Param, Post, ValidationPipe } from '@nestjs/common';
import { GoalsService } from './goals.service';
import { GoalDto } from './dto/goals.dto';

@Controller('goals')
export class GoalsController {
    constructor(private readonly goalsService: GoalsService) {}

    @Post()
    async createGoal(@Body(new ValidationPipe({transform: true})) body: GoalDto) {
        const data = body.toGoalCreateInput()
        const createdGoal = await this.goalsService.createGoal(data)
        return createdGoal
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
