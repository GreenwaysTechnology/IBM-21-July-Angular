import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profileaddress',
  templateUrl: './profileaddress.component.html',
  styles: [
  ]
})
export class ProfileaddressComponent implements OnInit {

  @Input()
  address: any = null;
  constructor() { }

  ngOnInit(): void {
  }

}
