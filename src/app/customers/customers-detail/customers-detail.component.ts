import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Customer } from '../customer';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-customers-detail',
  templateUrl: './customers-detail.component.html',
  styleUrls: ['./customers-detail.component.css']
})
export class CustomersDetailComponent implements OnInit {
  customer$: Observable<Customer>;
  constructor(
    private route: ActivatedRoute,
    private customersService: CustomersService
  ) { }

  ngOnInit(): void {
    this.customer$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.customersService.getCustomer(+params.get('id')))
    );
  }

}
