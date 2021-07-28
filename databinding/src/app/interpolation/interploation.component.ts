import { Component, OnInit } from '@angular/core';
import { Address } from '../types/address.type';

@Component({
  selector: 'app-interploation',
  templateUrl: './interploation.component.html',
  styles: [
  ]
})
export class InterploationComponent implements OnInit {

  //state/model/data
  name: string = "Subramanian Murugan"
  salary: number = 10000
  isValid: boolean = true;

  //object
  address: Address = {
    doorno: 10,
    city: 'Coimbatore'
  }

  //array
  skills: Array<string> = ["Angular", "Typescript", "Javascript", "MicroServices"];

  constructor() { }

  ngOnInit(): void {
  }

}
