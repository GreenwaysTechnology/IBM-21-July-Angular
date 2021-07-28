import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profilemaster',
  templateUrl: './profilemaster.component.html',
  styles: [
  ]
})
export class ProfilemasterComponent implements OnInit {

  @Input()
  profiles: Array<any> = [];
  constructor() { }

  ngOnInit(): void {
  }

}
