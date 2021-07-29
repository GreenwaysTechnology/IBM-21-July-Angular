import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: [
  ]
})
export class ChildComponent implements OnInit {
  txtValue: string = ""

  //customevent
  @Output()
  onSendRequest = new EventEmitter<string>();

  constructor() { }

  sendToParent() {
    //send data to parent
    this.onSendRequest.emit(this.txtValue)
  }

  ngOnInit(): void {
  }

}
