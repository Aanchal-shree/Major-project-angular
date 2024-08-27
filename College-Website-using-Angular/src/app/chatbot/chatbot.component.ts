import { Component } from '@angular/core';
import { OpenaiService } from '../openai.service';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  userMessage = '';
  conversation: Message[] = []; 

  constructor(private openaiService: OpenaiService) { }

  sendMessage() {
    const message = this.userMessage.trim();
    if (message) {
      this.conversation.push({ text: message, sender: 'user' });
      this.userMessage = '';

      this.openaiService.sendMessage(message).subscribe((response) => {
        const reply = response.choices[0].message.content.trim();
        this.conversation.push({ text: reply, sender: 'bot' });
      });
    }
  }
}
