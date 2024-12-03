import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student3 } from '../models/student3';

@Injectable({
  providedIn: 'root',
})
export class Student3Service {
  private baseurl = 'assets/student3.json';
  constructor(private http: HttpClient) {}
  getall(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseurl}`);
  }
  getByEmail(email: string): Observable<any[]> {
    return this.http.get<any>(`${this.baseurl}/search?email=${email}`);
  }
  addstudent3(records: Student3): Observable<any> {
    return this.http.post(`${this.baseurl}`, { data: records });
  }
  updatestudent3(id: string, records: Student3): Observable<any> {
    return this.http.put(`${this.baseurl}/id/${id}`, { data: records });
  }
  deletestudent3(id: string): Observable<any> {
    return this.http.delete(`${this.baseurl}/id/${id}`);
  }
  fetchByID(id: string): Observable<any> {
    return this.http.get(`${this.baseurl}/id/${id}`);
  }
  deleteByName(name: string): Observable<any> {
    return this.http.delete(`${this.baseurl}/name/${name}`);
  }
}
