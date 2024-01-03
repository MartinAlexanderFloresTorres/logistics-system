import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '../env/env';

@Injectable({
  providedIn: 'root',
})
export class HttpBackendPublic extends HttpClient {
  private _base_url: string = `${env.BACKEND_URL}/api/v1`;

  constructor(httpHandler: HttpHandler) {
    super(httpHandler);
  }

  public override get<T>(url: string) {
    url = this._base_url + url;
    return super.get<T>(url);
  }

  public override post<T>(url: string, body: any) {
    url = this._base_url + url;
    return super.post<T>(url, body);
  }

  public override put<T>(url: string, body: any) {
    url = this._base_url + url;
    return super.put<T>(url, body);
  }

  public override delete<T>(url: string) {
    url = this._base_url + url;
    return super.delete<T>(url);
  }

  public override patch<T>(url: string, body: any) {
    url = this._base_url + url;
    return super.patch<T>(url, body);
  }
}
