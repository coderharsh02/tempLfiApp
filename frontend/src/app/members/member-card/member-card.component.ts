import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { UserDetail } from 'src/app/_models/userDetail';
import { faCity, faUser, faDonate, faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {
  @Input() member: UserDetail | undefined;

  faCity = faCity;
  faUser = faUser;
  faDonate = faDonate;
  faStar = faStar;
  farStar = farStar;

  constructor() { }

  ngOnInit(): void {
  }

}
