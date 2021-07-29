import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styles: [
  ]
})
export class ProfilesComponent implements OnInit {

  profiles!: Array<any>

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profiles = this.profileService.findAll();
  }

}
