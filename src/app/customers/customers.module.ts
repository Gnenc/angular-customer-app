import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CustomersDetailComponent } from './customers-detail/customers-detail.component';
import { CustomersListComponent } from './customers-list/customers-list.component';


@NgModule({
  declarations: [CustomersComponent, CustomersDetailComponent, CustomersListComponent],
  imports: [
    CommonModule,
    FormsModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
