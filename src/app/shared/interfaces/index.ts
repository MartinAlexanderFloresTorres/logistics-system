import { MessageType } from '../types';

export interface Message {
  type: MessageType;
  message: string | null;
}
