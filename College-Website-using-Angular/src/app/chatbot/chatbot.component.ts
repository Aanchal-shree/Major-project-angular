// src/app/chat/chat.component.ts
import { Component } from '@angular/core';
import { ChatbotService } from '../chatbot.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'],
})
export class ChatbotComponent {
  messages: { user: string; bot: string }[] = [];
  userMessage: string = '';

  constructor(private chatbotService: ChatbotService) {}

  sendMessage(): void {
    this.chatbotService.sendMessage(this.userMessage).subscribe((response) => {
      this.messages.push({ user: this.userMessage, bot: response.botMessage });
      this.userMessage = '';
    });
  }
}
