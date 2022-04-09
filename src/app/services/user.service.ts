import { Injectable } from '@angular/core';
import { StorageVariables } from '../enum/enums';
import { User } from '../interfaces/user';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private localStorageService: LocalstorageService) { }

  UpdateUser(_user: User): void{
    let users: User[] = this.localStorageService.GetStorageVariable<User[]>(StorageVariables.USERS, []);

    let currentUserIndex: number = users.findIndex(u => u.Id === _user.Id);

    users.splice(currentUserIndex, 1);

    users.push(_user);

    this.localStorageService.SetStorageVariable(StorageVariables.USERS, users);

    this.localStorageService.SetStorageVariable(StorageVariables.SESSION, _user);
  }
}
