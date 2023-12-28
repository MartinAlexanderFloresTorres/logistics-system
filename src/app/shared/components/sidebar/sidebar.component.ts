import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'shared-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  public showAdminMenu = false;
  public showSecurityMenu = false;
  public showReportMenu = false;
  private _authService = inject(AuthService);

  public get user() {
    return this._authService.user;
  }

  public get isAdmin() {
    return this._authService.isAdmin;
  }

  public toggleAdminMenu() {
    this.showAdminMenu = !this.showAdminMenu;
  }

  public toggleReportMenu() {
    this.showReportMenu = !this.showReportMenu;
  }

  public toggleSecurityMenu() {
    this.showSecurityMenu = !this.showSecurityMenu;
  }

  public logout(): void {
    this._authService.logout();
  }
}
