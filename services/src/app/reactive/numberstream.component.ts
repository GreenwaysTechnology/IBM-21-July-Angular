import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NumberStreamService } from './numberstream.service';

@Component({
  selector: 'app-numberstream',
  templateUrl: './numberstream.component.html',
  styles: [
  ]
})
export class NumberstreamComponent implements OnInit {

  data: number[] = [];
  // data!:Observable<Array<number>>
  //data!:Observable<number>
  constructor(private numberService: NumberStreamService) { }

  ngOnInit(): void {
    this.numberService.getNumbers()
      .subscribe(data => {
        console.log('subscribe is called for ', data)
        //  this.data = data
        this.data.push(data);
      }, err => {
        console.log(err);
      }, () => console.log('done'));
  }

}
