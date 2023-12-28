import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'shared-not-found-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './not-found-page.component.html',
  styleUrl: './not-found-page.component.css',
})
export class NotFoundPageComponent implements OnInit, OnDestroy {
  private _router = inject(Router);
  private _timer: string | number | NodeJS.Timeout | undefined;
  private _interval: string | number | NodeJS.Timeout | undefined;
  public seconds = 5;

  ngOnInit(): void {
    // Volver al inicio en 5 segundos
    this._timer = setTimeout(() => {
      this._router.navigateByUrl('/');
    }, this.seconds * 1000);

    // Actualizar el contador cada segundo
    this._interval = setInterval(() => {
      this.seconds--;
    }, 1000);
  }

  ngOnDestroy(): void {
    // Limpiar el timer y el intervalo
    clearTimeout(this._timer as number);
    clearInterval(this._interval as number);
  }
}
