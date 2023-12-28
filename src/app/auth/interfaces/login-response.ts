import { Rol } from '../types';

export interface LoginResponse {
  name: string;
  role: Rol;
  token: string;
  username: string;
}
