import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IOrder } from './order.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })

  export class OrderService {
    orders: IOrder[] = [];
  
    constructor(private http: HttpClient) { }
  
    // Inserts a new record in SQL Server table
    createOrder(order: IOrder) {
        this.orders.push(order);
        this.http.post('https://localhost:7020/api/Order', this.orders).subscribe(() => {
            console.log(order.ordernumber + ' created!');
        });
    }

    // Puts a new message onto RabbitMQ
    createOrderQueue(order: IOrder) {
      this.orders.push(order);
      this.http.post('https://localhost:7020/api/OrderQueue', this.orders).subscribe(() => {
          console.log(order.ordernumber + ' created!');
      });
  }

    getOrders(): Observable<Array<any>> {
      return this.http.get<IOrder[]>('https://localhost:7020/api/Order');
    }
  }