import { Component, OnInit } from '@angular/core';
import { HaiService } from './hai.service';

@Component({
  selector: 'app-hai',
  templateUrl: './hai.component.html',
  styles: [
  ]
})
export class HaiComponent implements OnInit {

  message!: string;
  loading: boolean = false;
  status: string = "loading....."
  constructor(private haiService: HaiService) { }

  async ngOnInit() {
    //initalize the message after 5ms 
    // this.haiService.sayHai((message: string) => {
    //   this.message = message;
    //   this.loading = !this.loading;
    // })

    // this.haiService.sayHai().then((message) => {
    //   this.message = message
    //   this.loading = !this.loading;
    // })

    try {
      this.message = await this.haiService.sayHai();
      this.loading = !this.loading;
    }
    catch (err) {

    }

  }

}
