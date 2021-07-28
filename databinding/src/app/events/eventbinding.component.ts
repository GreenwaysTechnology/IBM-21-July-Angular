import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styles: [
  ]
})
export class EventbindingComponent implements OnInit {

  inputMessage:string="";
  messageOne:string=""
  messageTwo:string="defaultValue"
  messageThree:string=""
  constructor() { }

  ngOnInit(): void {
  }

  //Listener function
  onClick() {
    alert('button is clicked')
  }

  onRead(evt: any) {
   // console.log(evt.target.value)
    //update the variable
    this.inputMessage = evt.target.value
  }

}
