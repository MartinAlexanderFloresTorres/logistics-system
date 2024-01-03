import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { Message } from '../../../../class';
import { MenssageColorPipe } from '../../pipes/menssage-color.pipe';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'shared-alert',
  standalone: true,
  imports: [CommonModule, MenssageColorPipe],
  templateUrl: './alert.component.html',
})
export class AlertComponent implements OnInit {
  @Input() public message: Message | null = null;

  private _messageService = inject(MessageService);

  ngOnInit(): void {
    if (!this.message) throw new Error('Message is required');
    this._messageService.removeMessageSeconds(this.message);
  }

  public closeAlert() {
    this._messageService.removeMessage(this.message!);
  }
}
