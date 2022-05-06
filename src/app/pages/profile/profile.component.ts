import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BadgeTypes, StorageVariables } from 'src/app/enum/enums';
import { Badge, User } from 'src/app/interfaces/user';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { UserService } from 'src/app/services/user.service';
import { PicturesComponent } from './pictures/pictures.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css', '../../shared/styles/styles.css']
})
export class ProfileComponent implements OnInit {

  user!: User;
  profilePicturePath!: string;
  imagesPath: string = "../../../assets/picture-photos/";

  constructor(private localStorage: LocalstorageService,
              private http: HttpClient,
              private dialog: MatDialog,
              private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.localStorage.GetStorageVariable<User>(StorageVariables.SESSION, {} as User);
    this.GetProfilePicture();
  }

  CalcBarWidth(): number{
    return (this.user.Level.CurrentXP / this.user.Level.NeededXP ) * 100;
  }

  GetBadgeImage(_badge: Badge): string{
    return `../../../assets/img/${BadgeTypes[_badge.Type].toLowerCase()}-medal.png`;
  }

  GetProfilePicture(): void{
    let hasPhoto = this.localStorage.GetStorageVariable<User>(StorageVariables.SESSION)?.ProfilePicturePath !== "";
    let img =  hasPhoto ? this.localStorage.GetStorageVariable<User>(StorageVariables.SESSION)?.ProfilePicturePath : "default.png";
    this.profilePicturePath = `${this.imagesPath}${img}`;
  }
  openDialog(): void{
    const dialogRef = this.dialog.open(PicturesComponent, {height: "600px", width: "900px", hasBackdrop: false, });

    dialogRef.afterClosed().subscribe({
      next: (next) => {
        let img = next;
        this.profilePicturePath = `${this.imagesPath}${img}`;
        this.user.ProfilePicturePath = next;
        this.userService.UpdateUser(this.user);
      }
    })
  }
}


export interface FileUp{
  mimeType: string;
  base64: string;
}
