import { Component } from '@angular/core';
import { ConfigService } from './services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routingapp';
  constructor(private config: ConfigService) {

  }
  ngOnInit() {
    this.config.getConfig()
      .subscribe((configdata) => {
        console.log(configdata);
      });
  }
}
