import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
    FormsModule
  ]
})
export class SharedModule { }
