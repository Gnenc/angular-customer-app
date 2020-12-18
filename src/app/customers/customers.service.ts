import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Customer } from './customer';
import { CUSTOMERS } from './mocking-customers';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor() { }

  getCustomers(): Observable<Customer[]> {
    return of(CUSTOMERS);
  }

  getCustomer(id: number | string): Observable<Customer> {
    const customer$ = of(CUSTOMERS.find((customer) => {
      return customer.id === +id;
    }));
    return customer$;
  }
}
