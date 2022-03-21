import { Component, OnInit } from '@angular/core';
import { StorageVariables } from 'src/app/enum/enums';
import { User } from 'src/app/interfaces/user';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../shared/styles/styles.css']
})
export class HomeComponent implements OnInit {

  currentUser!: User;
  constructor(private localStorageService: LocalstorageService) { }

  ngOnInit(): void {
    this.currentUser= this.localStorageService.GetStorageVariable<User>(StorageVariables.SESSION, {} as User); 
  }

}
