import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPlant } from './plant.model';

@Injectable({
  providedIn: 'root'
})

export class PlantService {

  constructor(private http: HttpClient) { }

  getPlants(): Observable<Array<any>> {
    return this.http.get<IPlant[]>('https://localhost:7020/api/Plant');
  }
}
