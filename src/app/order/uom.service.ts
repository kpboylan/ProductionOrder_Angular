import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UomService {

  constructor(private http: HttpClient) { }

  getUom() {
    return this.http.get('https://localhost:7020/api/UOM');
  }
}
