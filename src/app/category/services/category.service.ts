import { Injectable, inject } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { HttpBackendClient } from '../../../config';
import { CategoryAllResponse, Category, CategoryEdit, CategoryNew, CategoryNewResponse, CategoryDeleteResponse, CategoryEditResponse } from '../interfaces';
import { showLog } from '../../../helpers';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private _http = inject(HttpBackendClient);

  public categories: Category[] = [];
  public loadingCategories: boolean = true;

  public findCategories(): Observable<CategoryAllResponse> {
    if (this.categories.length > 0) {
      this.loadingCategories = false;
      return of({ success: true, data: this.categories });
    }

    return this._http.get<CategoryAllResponse>('/categories/all').pipe(
      tap((response) => {
        if (response.success) this.categories = response.data;
        this.loadingCategories = false;
      }),
      catchError((e) => {
        showLog(e);
        this.loadingCategories = false;
        return of({ success: false, data: [] });
      })
    );
  }

  public removeCategory(id: number): Observable<CategoryDeleteResponse> {
    return this._http.delete<CategoryDeleteResponse>(`/categories/delete/${id}`).pipe(
      tap((response) => {
        if (response.success) {
          this.categories = this.categories.filter((c) => c.id !== id);
        }
      }),
      catchError((e) => {
        showLog(e);
        return of({ success: false, message: 'No se pudo eliminar la categoría' });
      })
    );
  }

  public createCategory(category: CategoryNew): Observable<CategoryNewResponse> {
    return this._http.post<CategoryNewResponse>('/categories/create', category).pipe(
      tap((response: CategoryNewResponse) => {
        if (response.success && response.data) {
          this.categories = [...this.categories, response.data];
        }
      }),
      catchError((e) => {
        showLog(e);
        return of({ success: false, data: null });
      })
    );
  }

  public updateCategory(id: number, category: CategoryEdit): Observable<CategoryEditResponse> {
    return this._http.put<CategoryEditResponse>(`/categories/edit/${id}`, category).pipe(
      tap((response) => {
        if (response.success) {
          this.categories = this.categories.map((c) => {
            if (c.id === id) {
              return { ...c, ...category };
            }
            return c;
          });
        }
      }),
      catchError((e) => {
        showLog(e);
        return of({ success: false, data: null });
      })
    );
  }
}
