import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Message } from '../../interfaces';

@Component({
  selector: 'shared-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageComponent {
  @Input() public message: Message = { message: '', type: null };
}
