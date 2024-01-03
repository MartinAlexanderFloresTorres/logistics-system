import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'shared-dialog-confirm',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './dialog-confirm.component.html',
  styleUrl: './dialog-confirm.component.css',
})
export class DialogConfirmComponent {
  @Input() public dialogTitle = '';
  @Input() public dialogMessage = '';
  @Input() public dialogConfirmText = '';
  @Input() public dialogCancelText = '';
  @Input() public loading = false;
  @Input() public loadingText = '';
  @Output() public onCloseModal = new EventEmitter();
  @Output() public onConfirm = new EventEmitter();

  public handleClose() {
    this.onCloseModal.emit();
  }

  public handleCloseModalContainer(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.handleClose();
    }
  }

  public handleConfirm() {
    this.onConfirm.emit();
  }
}
