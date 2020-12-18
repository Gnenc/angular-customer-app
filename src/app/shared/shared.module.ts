import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AwesomePipe } from './awesome.pipe';
import { HiglightDirective } from './higlight.directive';


@NgModule({
  declarations: [AwesomePipe, HiglightDirective],
  imports: [
    CommonModule
  ],
  exports: [
    AwesomePipe,
    HiglightDirective,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }
