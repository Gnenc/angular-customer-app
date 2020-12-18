import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Order } from './order';
import { ORDERS } from './mocking-orders';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor() { }

  getOrders(): Observable<Order[]> {
    return of(ORDERS);
  }

  getOrder(id: number | string): Observable<Order> {
    const order$ = of(ORDERS.find((order) => {
      return order.id === +id;
    }));
    return order$;
  }
}
