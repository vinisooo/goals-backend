import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChecksModule  } from './modules/checks/checks.module';
import { GoalsModule } from './modules/goals/goals.module';
import { PrismaService } from './prisma.service';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [GoalsModule, ChecksModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, 
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
