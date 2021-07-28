import { Component, OnInit } from '@angular/core';
import { PROFILES } from '../mock-data/profiles';

@Component({
  selector: 'app-propsbinding',
  templateUrl: './propsbinding.component.html',
  styles: [
  ]
})
export class PropsbindingComponent implements OnInit {

  hello: string = "Hello Property"
  hai: string = "Hai Property";

  profiles: Array<any>;
  constructor() {
    this.profiles = PROFILES;
  }

  ngOnInit(): void {
  }

}
