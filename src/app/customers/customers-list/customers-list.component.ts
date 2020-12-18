import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Customer } from '../customer';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  customers: Observable<Customer[]>;
  constructor(
    private customersService: CustomersService
  ) { }

  ngOnInit(): void {
    this.customers = this.customersService.getCustomers();
  }

}
