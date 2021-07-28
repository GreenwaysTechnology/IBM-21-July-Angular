import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profiledetails',
  templateUrl: './profiledetails.component.html',
  styles: [
  ]
})
export class ProfiledetailsComponent implements OnInit {

  @Input()
  profiles: Array<any> = [];
  constructor() { }

  ngOnInit(): void {
  }

}
