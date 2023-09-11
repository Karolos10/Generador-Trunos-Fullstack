import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  private baseUrl = 'http://localhost:8080';

constructor(private http: HttpClient) { }

getDatas(): Observable<any>{
  return this.http.get(`${this.baseUrl}/turnos/{requestedId}`)
}

postData(data: any): Observable<any>{
  return this.http.post(`${this.baseUrl}/turnos`, data);
}

}
