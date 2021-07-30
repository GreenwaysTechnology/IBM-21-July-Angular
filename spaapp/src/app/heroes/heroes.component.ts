import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../types/hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes!: Observable<Array<Hero>>;

  constructor(private heroservice: HeroService) { }

  ngOnInit(): void {
    this.heroes = this.heroservice.findAll();
  }

}
