import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Order } from '../order';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {
  orders: Observable<Order[]>;

  constructor(
    private ordersService: OrdersService
  ) { }

  ngOnInit(): void {
    this.orders = this.ordersService.getOrders();
  }

}
