import { Pipe, PipeTransform } from '@angular/core';
import { MessageType } from '../types';

@Pipe({
  name: 'menssageColor',
  standalone: true,
})
export class MenssageColorPipe implements PipeTransform {
  transform(type: MessageType, isBackground?: boolean): string {
    switch (type) {
      case 'error':
        return isBackground ? 'bg-red-800' : 'bg-red-800 text-red-500 border-red-800';
      case 'success':
        return isBackground ? 'bg-green-800' : 'bg-green-800 text-green-500 border-green-800';
      case 'warning':
        return isBackground ? 'bg-yellow-800' : 'bg-yellow-800 text-yellow-500 border-yellow-800';
      case 'info':
        return isBackground ? 'bg-blue-800' : 'bg-blue-800 text-blue-500 border-blue-800';
      default:
        return '';
    }
  }
}
