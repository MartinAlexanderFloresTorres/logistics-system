import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '../env/env';

@Injectable({
  providedIn: 'root',
})
export class HttpBackendClient extends HttpClient {
  private _base_url: string = `${env.BACKEND_URL}/api/v1`;

  private _headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  });

  private _params = new HttpParams();

  private _options = {
    headers: this._headers,
    params: this._params,
  };

  constructor(httpHandler: HttpHandler) {
    super(httpHandler);
  }

  public override get<T>(url: string) {
    url = this._base_url + url;
    return super.get<T>(url, this._options);
  }

  public override post<T>(url: string, body: any) {
    url = this._base_url + url;
    return super.post<T>(url, body, this._options);
  }

  public override put<T>(url: string, body: any) {
    url = this._base_url + url;
    return super.put<T>(url, body, this._options);
  }

  public override delete<T>(url: string) {
    url = this._base_url + url;
    return super.delete<T>(url, this._options);
  }

  public override patch<T>(url: string, body: any) {
    url = this._base_url + url;
    return super.patch<T>(url, body, this._options);
  }
}
