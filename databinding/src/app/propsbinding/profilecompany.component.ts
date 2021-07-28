import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profilecompany',
  templateUrl: './profilecompany.component.html',
  styles: [
      
  ]
})
export class ProfilecompanyComponent implements OnInit {

  @Input()
  company:any = null;
  constructor() { }

  ngOnInit(): void {
  }

}
