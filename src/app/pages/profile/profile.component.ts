import { Component, OnInit } from '@angular/core';
import { BadgeTypes, StorageVariables } from 'src/app/enum/enums';
import { Badge, User } from 'src/app/interfaces/user';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css', '../../shared/styles/styles.css']
})
export class ProfileComponent implements OnInit {

  user!: User;
  profilePicturePath!: string;

  constructor(private localStorage: LocalstorageService) { }

  ngOnInit(): void {
    this.user = this.localStorage.GetStorageVariable<User>(StorageVariables.SESSION, {} as User);
    this.profilePicturePath = `../../../assets/img/${this.user.ProfilePicturePath}`;
  }

  CalcBarWidth(): number{
    return (this.user.Level.CurrentXP / this.user.Level.NeededXP ) * 100;
  }

  GetBadgeImage(_badge: Badge): string{
    return `../../../assets/img/${BadgeTypes[_badge.Type].toLowerCase()}-medal.png`;
  }

}
