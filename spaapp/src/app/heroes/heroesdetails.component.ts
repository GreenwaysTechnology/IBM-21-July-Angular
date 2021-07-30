import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../types/hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-heroesdetails',
  templateUrl: './heroesdetails.component.html',
  styles: [
  ]
})
export class HeroesdetailsComponent implements OnInit {

  id!: number;
  hero!: Hero;
  constructor(private routeInfo: ActivatedRoute, private heroService: HeroService, private router: Router) { }

  ngOnInit(): void {
    this.routeInfo.params.subscribe(params => {
      console.log(params)
      this.id = +params.id //string to number conversion

    })
    this.heroService.findById(this.id).subscribe(hero => {
      console.log(hero)
      this.hero = hero;
    });

  }
  goto() {
    this.router.navigate(['myheroes'])
  }

}
