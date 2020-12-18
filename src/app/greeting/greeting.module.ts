import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GreetingComponent } from './greeting.component';
import { GreetingServiceConfig } from './greeting';



@NgModule({
  declarations: [GreetingComponent],
  imports: [
    CommonModule
  ],
  exports: [
    GreetingComponent
  ]
})
export class GreetingModule {
  constructor(@Optional() @SkipSelf() parentModule?: GreetingModule) {
    if (parentModule) {
      throw new Error('GreetingModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(config: GreetingServiceConfig): ModuleWithProviders<GreetingModule> {
    return {
      ngModule: GreetingModule,
      providers: [
        { provide: GreetingServiceConfig, useValue: config }
      ]
    };
  }
}
