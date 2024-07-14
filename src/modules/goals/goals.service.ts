import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class GoalsService {
    constructor(private prisma: PrismaService) {}

    async createGoal(data: Prisma.GoalCreateInput) {
        const checks = data.checks && Array.isArray(data.checks) ? {
            createMany: {
                data: data.checks.map(check => ({
                    name: check.name,
                    checked: check.checked,
                }))
            }
        } : undefined;

        const createdGoal = await this.prisma.goal.create({
            data: {
                ...data,
                checks: checks
            },
            include: {
                checks: true
            }
        });

        return createdGoal;
    }

    async getGoals() {
        return this.prisma.goal.findMany()
    }

    async getGoalById(goalId: number) {
        return this.prisma.goal.findUnique({
            where: {
                id: goalId
            },
            include: {
                checks: true
            }
        })
    }

    // TO-DO: Implement this method
    private generatePercentage () {}
}
