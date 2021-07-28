import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styles: [
  ]
})
export class GreeterComponent implements OnInit {
  @Input()
  message:string=""

  @Input('name')
  firstName:string=""


  constructor() { }

  ngOnInit(): void {
  }

}
