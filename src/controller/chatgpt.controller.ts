import { Controller, Get, Req, Post } from '@nestjs/common';
import { ChatgptService } from 'src/service/chatgpt.service';

@Controller()
export class ChatgptController {
  constructor(private readonly chatgptService: ChatgptService) {}

  @Get()
  conversation(): string {
    return this.chatgptService.conversation();
  }
}
