import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';
import { AlertComponent } from './shared/components/alert/alert.component';
import { Message } from '../class';
import { MessageService } from './shared/services/message.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AuthRoutingModule, DashboardRoutingModule, AlertComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  private _messageService = inject(MessageService);

  public get messages() {
    return this._messageService.messages;
  }
}
