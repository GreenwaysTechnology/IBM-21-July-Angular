import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileService } from '../profiles/profile.service';

@Component({
  selector: 'app-profilereactive',
  templateUrl: './profilereactive.component.html',
  styles: [
  ]
})
export class ProfilereactiveComponent implements OnInit {

  profiles!: Observable<Array<any>>;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profiles = this.profileService.getProfileStream();
  }

}
