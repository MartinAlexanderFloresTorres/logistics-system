import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MessageComponent } from '../../../shared/components/message/message.component';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { AuthService } from '../../services/auth.service';
import { Message } from '../../../shared/interfaces';
import { MessageType } from '../../../shared/types';
import { showLog } from '../../../../helpers';

const DEFAULT_MESSAGE: Message = {
  type: null,
  message: null,
};

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
  public message: Message = DEFAULT_MESSAGE;

  private addMessage(type: MessageType, message: string | null) {
    this.message = { type, message };
  }

  public onSubmit(): void {
    const { username, password } = this.form.value;

    if (!username) {
      this.addMessage('error', 'Ingrese un usuario');
      return;
    }

    if (!password) {
      this.addMessage('error', 'Ingrese una contraseña');
      return;
    }

    this.addMessage('info', 'Iniciando sesión...');
    this.loading = true;
    this._authService.login(username, password).subscribe({
      next: (res) => {
        this.loading = false;
        if (!res) {
          this.addMessage('error', 'Credenciales incorrectas');
          return;
        }

        this.message = DEFAULT_MESSAGE;
      },
      error: (err) => {
        showLog(err);
        this.loading = false;
        this.addMessage('error', 'Credenciales incorrectas');
      },
    });
  }
}
