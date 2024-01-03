import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../../../../class';
import { MenssageColorPipe } from '../../pipes/menssage-color.pipe';

@Component({
  selector: 'shared-message',
  standalone: true,
  imports: [CommonModule, MenssageColorPipe],
  templateUrl: './message.component.html',
})
export class MessageComponent implements OnInit {
  @Input() public message!: Message;

  ngOnInit(): void {
    if (!this.message) {
      throw new Error('MessageComponent: message is required');
    }
  }
}
