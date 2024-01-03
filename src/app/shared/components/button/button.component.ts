import { Component, Input } from '@angular/core';
import { SpinnerComponent } from '../spinner/spinner.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'shared-button',
  standalone: true,
  imports: [CommonModule, SpinnerComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() public loading: boolean = false;
  @Input() public text: string = '';
  @Input() public className: string = '';
}
