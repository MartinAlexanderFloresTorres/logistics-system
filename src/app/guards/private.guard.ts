import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';

export const privateGuard: CanActivateFn = (route, state): boolean => {
  const token = localStorage.getItem('token');
  const authService = inject(AuthService);
  if (token || authService.user) return true;
  return false;
};
