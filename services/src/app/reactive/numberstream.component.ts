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
  list!: Array<number>
  listAsync!: Observable<Array<number>>
  constructor(private numberService: NumberStreamService) { }


  ngOnInit() {
    this.numberService.getNumbers().subscribe(data => {
      console.log(data);
      this.data.push(data);
    }, err => {
      console.log(err);
    }, () => {
      console.log('done')
    });

    this.numberService.getArray().subscribe(list => {
      console.log(list)
      this.list = list;
    }, err => {
      console.log(err);
    }, () => {
      console.log('done')
    });

    this.listAsync = this.numberService.getArray();

  }



}
