import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributebinding',
  templateUrl: './attributebinding.component.html',
  styles: [
  ]
})
export class AttributebindingComponent implements OnInit {

  //img location
  imgLocation: string = "favicon.ico";
  isEnabled:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
