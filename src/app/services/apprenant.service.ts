import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apprenant } from '../models/apprenant.model';

@Injectable({
  providedIn: 'root'
})
export class ApprenantService {

  constructor(private httpClient:HttpClient) { }

  get(): Observable<apprenant[]> {
    return this.httpClient.get<apprenant[]>('http://localhost:8069/apprenant/all');
   }

   create(payload: apprenant) {
    return this.httpClient.post<apprenant>('http://localhost:8069/apprenant/add', payload)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Erreur lors de la création du apprenant', error);
          return throwError(error);
        })
      );
  }

  getById(id: number): Observable<apprenant> {
    return this.httpClient.get<apprenant>(`http://localhost:8069/apprenant/${id}`);
  }

  update(payload: apprenant): Observable<apprenant> {
   return this.httpClient.put<apprenant>(
    `http://localhost:8069/apprenant/${payload.id}`,
    payload
   );
  }

  delete(id: number) {
    return this.httpClient.delete(`http://localhost:8069/apprenant/${id}`);
   }


}
