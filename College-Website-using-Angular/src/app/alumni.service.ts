import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumniService {

  private apiUrl = 'http://localhost:3000/api/alumni';  

  constructor(private http: HttpClient) { }

  registerAlumni(alumni: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, alumni);
  }
}
