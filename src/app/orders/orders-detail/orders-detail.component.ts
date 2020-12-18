import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Order } from '../order';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-orders-detail',
  templateUrl: './orders-detail.component.html',
  styleUrls: ['./orders-detail.component.css']
})
export class OrdersDetailComponent implements OnInit {
  order$: Observable<Order>;

  constructor(
    private ordersService: OrdersService,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.order$ = this.router.paramMap.pipe(
      switchMap((params: ParamMap) => this.ordersService.getOrder(+params.get('id')))
    );
  }

}
