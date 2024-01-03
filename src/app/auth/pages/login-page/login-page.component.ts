import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MessageComponent } from '../../../shared/components/message/message.component';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { AuthService } from '../../services/auth.service';
import { showLog } from '../../../../helpers';
import { DEFAULT_MESSAGE } from '../../../../constants';
import { Message } from '../../../../class';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MessageComponent, ButtonComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  public fb = inject(FormBuilder);
  public form = this.fb.group({
    username: [''],
    password: [''],
  });

  private _authService = inject(AuthService);
  public loading: boolean = false;
  public message = new Message(DEFAULT_MESSAGE.type, DEFAULT_MESSAGE.message);

  public onSubmit(): void {
    const { username, password } = this.form.value;

    if (!username) {
      this.message.error('Ingrese un usuario');
      return;
    }

    if (!password) {
      this.message.error('Ingrese una contraseña');
      return;
    }

    this.message.info('Iniciando sesión...');
    this.loading = true;
    this._authService.login(username, password).subscribe({
      next: (res) => {
        this.loading = false;
        if (!res) {
          this.message.error('Credenciales incorrectas');
          return;
        }

        this.message.reset();
      },
      error: (err) => {
        showLog(err);
        this.loading = false;
        this.message.error('Credenciales incorrectas');
      },
    });
  }
}
