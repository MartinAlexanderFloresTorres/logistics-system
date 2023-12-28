import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token');
  const authService = inject(AuthService);
  if (token && authService.user && authService.isAdmin) return true;
  return false;
};
