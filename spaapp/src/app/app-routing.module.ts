import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterationComponent } from './forms/registeration.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroesdetailsComponent } from './heroes/heroesdetails.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'details/:id', component: HeroesdetailsComponent },
  { path: 'myheroes', redirectTo: '/heroes', pathMatch: 'full' },
  { path: 'register', component: RegisterationComponent },

  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  { path: '**', redirectTo: '/heroes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
