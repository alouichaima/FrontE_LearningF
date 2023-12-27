// message.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private baseUrl = 'http://localhost:8069/message';

  constructor(private http: HttpClient) { }

  getAllMessages(): Observable<any> {
    return this.http.get(`${this.baseUrl}`)
      .pipe(
        catchError(error => {
          return throwError(error);
        })
      );
  }

  sendMessage(message: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/envoyer-message`, message, { responseType: 'text' })
      .pipe(
        catchError(error => {
          return throwError(error);
        })
      );
  }
}
