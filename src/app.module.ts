import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoalsModule } from './goals/goals.module';
import { ChecksModule } from './checks/checks.module';
import { ChecksModule } from './modules/checks/checks.module';
import { GoalsModule } from './modules/goals/goals.module';

@Module({
  imports: [GoalsModule, ChecksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
