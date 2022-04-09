import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  constructor(private localStorage: LocalstorageService,
              private http: HttpClient) { }

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

  UploadPictureImg(_file: any): void{
    console.log(_file.target.files[0]);

    let data = new FormData();
    data.append("file", _file.target.files[0] as File);

    this.http.post<FileUp>(`https://localhost:44335/api/Values/UploadImage?userId=${this.user.Id}`, data).subscribe({
      next: (next) => {
        console.log(next);
        this.profilePicturePath = `data:${next.mimeType};base64,${next.base64}`;
      },
      error: (err) => {
        console.log("--------------------------------------");
        console.log(err);
      }
    });

  }

  GetProfilePicture(): void{
    this.http.get<FileUp>(`https://localhost:44335/api/Values/GetProfilePicture?userId=${this.user.Id}`).subscribe({
      next: (next) => {
        console.log(next);
        this.profilePicturePath = `data:${next.mimeType};base64,${next.base64}`;
      },
      error: (err) => {
        console.log("--------------------------------------");
        console.log(err);
      }
    });
  }

}


export interface FileUp{
  mimeType: string;
  base64: string;
}
