import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../types/hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [
  ]
})
export class HeroComponent implements OnInit {

  heroes!: Observable<Array<Hero>>
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroes = this.heroService.findAll();
  }

}
