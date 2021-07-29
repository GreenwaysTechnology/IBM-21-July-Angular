import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styles: [
  ]
})
export class ParentComponent implements OnInit {

  childMessage: string = ""

  constructor() { }

  onRead(data: string) {
    this.childMessage = data;
  }

  ngOnInit(): void {
  }

}
