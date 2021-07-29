import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styles: [
  ]
})
export class PipesComponent implements OnInit {

  today = new Date();
  name: string = "subramanian"
  stockValue: number = 1000.78675
  constructor() { }

  ngOnInit(): void {
  }

}
