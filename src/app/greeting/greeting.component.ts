import { Component, OnInit } from '@angular/core';

import { GreetingService } from './greeting.service';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {
  title = 'Angular NgModules Tutorial';
  user = '';

  constructor(
    private greetingService: GreetingService
  ) { }

  ngOnInit(): void {
    this.user = this.greetingService.userName;
  }

}
