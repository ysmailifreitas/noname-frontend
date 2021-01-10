import { Observable } from 'rxjs';
import { TresCortes } from './trescortes.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrescortesService {

  constructor(private http: HttpClient) { }

  getData(): Observable<TresCortes[]> {
    return this.http.post<TresCortes[]>('http://localhost:4000/table', '', { responseType: 'json' })
  }
}
