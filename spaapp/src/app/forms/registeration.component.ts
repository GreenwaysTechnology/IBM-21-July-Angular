import { Component, OnInit } from '@angular/core';
import { HeroService } from '../heroes/hero.service';
import { HeroModel } from './registeration.model';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styles: [
  ]
})
export class RegisterationComponent implements OnInit {

  heroModel: any;
  constructor() {
    this.heroModel = new HeroModel(1, 'Spider Man', 'Hero');
  }

  ngOnInit(): void {
  }
  save() {
    console.log(this.heroModel)
    //todo Add this hero into api
  }

}
