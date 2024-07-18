import { Module } from '@nestjs/common';
import { GoalsController } from './goals.controller';
import { GoalsService } from './goals.service';
import { PrismaService } from 'src/prisma.service';
import { FileService } from 'src/services/file/file.service';

@Module({
  controllers: [GoalsController],
  providers: [GoalsService, PrismaService, FileService]
})
export class GoalsModule {}
