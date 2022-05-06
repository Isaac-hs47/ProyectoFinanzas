import { Component, OnInit } from '@angular/core';
import { BadgesCodes, BadgeTypes, StorageVariables } from 'src/app/enum/enums';
import { BADGES } from 'src/app/interfaces/constants';
import { Badge, User } from 'src/app/interfaces/user';
import { AlertService } from 'src/app/services/alert.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../shared/styles/styles.css']
})
export class HomeComponent implements OnInit {

  currentUser!: User;
  xpos: number = 0;
  ypos: number = 0;
  bee!: HTMLElement | null;
  constructor(private localStorageService: LocalstorageService,
              private alertService: AlertService,
              private userService: UserService) { }

  ngOnInit(): void {
    this.currentUser= this.localStorageService.GetStorageVariable<User>(StorageVariables.SESSION, {} as User);

    this.GiveBeginnerBadge();

    document.getElementById("bee")?.addEventListener("mouseenter", this.ChagePosition)
  }

  GiveBeginnerBadge(): void{

    if(!this.currentUser.Badges.some(b => b.Code === BadgesCodes.NEW_BEGINNING))
    {
      let badge: Badge | undefined = BADGES.find(b => b.Code === BadgesCodes.NEW_BEGINNING);

      if(badge)
      {
        this.currentUser.Badges.push(badge);

        this.userService.UpdateUser(this.currentUser);

        this.alertService.BadgeAlert(BadgeTypes[0].toLowerCase(), badge.Description);
      }
      else
      {
        console.error("No se encontro la insignia de nuevo comienzo");
      }
    }
  }

  ChagePosition(): void{
    document.addEventListener("mousemove", (e) => {
      console.log(e)
      document.getElementById("bee")?.style.setProperty("transform", `translate(${e.x}px, ${e.y}px)`);
    });
  }



}
