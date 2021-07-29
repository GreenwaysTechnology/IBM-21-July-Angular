// import { Component, OnDestroy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { HelloService } from './hello.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styles: [
  ]
})
export class HelloComponent { //implements OnInit, OnDestroy {

  message: string = "";
  constructor(private helloService: HelloService) {
    // this.message = this.helloService.sayHello();
  }

  ngOnInit(): void {
    console.log('init is called')
    this.message = this.helloService.sayHello();
  }
  ngOnDestroy(): void {
    console.log('write code for clean up activties')
  }

}
