import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if',
  templateUrl: './if.component.html',
  styles: [
  ]
})
export class IfComponent implements OnInit {
  isHidden: boolean = true
  isEnabled: boolean = false;
  loading: boolean = false;
  status: string = "loading....."

  constructor() {
    setTimeout(() => {
      this.loading = true;
      this.status = "Hello,Data is available"
    }, 5000)

  }

  ngOnInit(): void {
  }
  toggle() {
    this.isHidden = !this.isHidden;
  }

}
