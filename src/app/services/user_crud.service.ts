import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class User_crudService {
  private baseUrl = 'http://localhost:8087/utilisateur';


constructor(private http:HttpClient) { }

adduser(u:user):Observable<object>{
  return this.http.post("http://localhost:8087/utilisateur" ,u).pipe()
}
GetOneUser(id:any){
  return this.http.get(`http://localhost:8069/api/auth/GetOneUser/${id}`);

}
updateUser(id: any, user: user): Observable<user> {
  
  return this.http.put<user>(`http://localhost:8080/api/auth/updateUser/${id}`, user);
}
}
