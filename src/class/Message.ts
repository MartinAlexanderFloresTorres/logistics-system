import { MessageType } from '../app/shared/types';

export class Message {
  public type: MessageType | null;
  public message: string | null;
  public id = Math.random().toString(36).substr(2, 9);

  constructor(type?: MessageType, message?: string | null) {
    this.type = type || null;
    this.message = message || null;
    this.id = Math.random().toString(36).substr(2, 9);
  }

  public error(message: string | null) {
    this.type = 'error';
    this.message = message;
  }

  public success(message: string | null) {
    this.type = 'success';
    this.message = message;
  }

  public warning(message: string | null) {
    this.type = 'warning';
    this.message = message;
  }

  public info(message: string | null) {
    this.type = 'info';
    this.message = message;
  }

  public reset() {
    this.type = null;
    this.message = null;
  }
}
