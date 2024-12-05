import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private baseurl="assets/cards.json";
  constructor(private http:HttpClient) { }
  getDetails():Observable<any[]>{
    return this.http.get<any[]>(`${this.baseurl}`)
  }
}
