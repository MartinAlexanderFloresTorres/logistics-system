import { CanActivateFn } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state): boolean => {
  const token = localStorage.getItem('token');
  const authService = inject(AuthService);
  if (token && authService.user) return false;
  return true;
};
