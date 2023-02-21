import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatgptController } from './controller/chatgpt.controller';
import { ChatgptService } from './service/chatgpt.service';

@Module({
  imports: [],
  controllers: [AppController, ChatgptController],
  providers: [AppService, ChatgptService],
})
export class AppModule {}
