import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = 'http://localhost:3000/api/news';

  constructor(private http: HttpClient) {}

  getNews(): Observable<any[]> {
    console.log('📡 Appel API vers:', this.apiUrl);
    return this.http.get<any[]>(this.apiUrl);
  }
}
