import { Injectable } from '@angular/core';
import { Message } from '../../../class';

const DEFAULT_SECONDS = 5;
@Injectable({
  providedIn: 'root',
})
export class MessageService {
  public messages: Message[] = [];

  public removeMessageSeconds(message: Message) {
    let timeout: NodeJS.Timeout | null = null;

    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => {
      this.removeMessage(message);
    }, DEFAULT_SECONDS * 1000);
  }

  public error(text: string | null) {
    const message = new Message('error', text);
    this.messages.push(message);
  }

  public success(text: string | null) {
    const message = new Message('success', text);
    this.messages.push(message);
  }

  public warning(text: string | null) {
    const message = new Message('warning', text);
    this.messages.push(message);
  }

  public info(text: string | null) {
    const message = new Message('info', text);
    this.messages.push(message);
  }

  public resetAll() {
    this.messages = [];
  }

  public removeMessage(message: Message) {
    this.messages = this.messages.filter((msg) => msg.id !== message.id);
  }
}
