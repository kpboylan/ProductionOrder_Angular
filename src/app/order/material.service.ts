import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor(private http: HttpClient) { }

  getMaterials() {
    return this.http.get('https://localhost:7020/api/Material');
  }
}
