import { Injectable, Optional } from '@angular/core';
import { GreetingServiceConfig } from './greeting';

let nextId = 1;

@Injectable({
  providedIn: 'root'
})
export class GreetingService {
  id = nextId++;
  private _userName = 'Startup'
  constructor(@Optional() config?: GreetingServiceConfig) {
    this._userName = config.userName;
   }

  get userName() {
    const suffix = this.id > 1 ? `times ${this.id}`: '';
    return this._userName + suffix;
  }
}
