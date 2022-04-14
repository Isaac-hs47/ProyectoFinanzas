import { Injectable } from '@angular/core';
import { BadgesCodes, BadgeTypes, StorageVariables } from '../enum/enums';
import { BADGES } from '../interfaces/constants';
import { Exam } from '../interfaces/exam';
import { Badge, TestComplete, User } from '../interfaces/user';
import { AlertService } from './alert.service';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private localStorageService: LocalstorageService, private alertService: AlertService) { }

  UpdateUser(_user: User): void{
    let users: User[] = this.localStorageService.GetStorageVariable<User[]>(StorageVariables.USERS, []);

    let currentUserIndex: number = users.findIndex(u => u.Id === _user.Id);

    users.splice(currentUserIndex, 1);

    users.push(_user);

    this.localStorageService.SetStorageVariable(StorageVariables.USERS, users);

    this.localStorageService.SetStorageVariable(StorageVariables.SESSION, _user);
  }


  GiveBadge(_user: User, _badge: BadgesCodes): void{
    if(_user.Badges.some(b => b.Code === _badge)) return;

    let badge: Badge | undefined = BADGES.find(b => b.Code === _badge);

    if(badge)
    {
      _user.Badges.push(badge);

      this.alertService.BadgeAlert(BadgeTypes[0].toLowerCase(), badge.Description);

      this.UpdateUser(_user);
    }
  }


  UpdateCompletedTest(_user: User,_exam: Exam): void{

    let index: number = _user.CompletedTest.findIndex(ex => ex.testID === _exam.Id);
    debugger

    if(index !== -1)
    {
      _user.CompletedTest.splice(index, 1);
    }

    let currDate: Date = new Date();
    let RetakeDate: Date = new Date(currDate.getFullYear(), currDate.getMonth() + 1, currDate.getDate(), currDate.getHours(), currDate.getMinutes());
    let completeExam: TestComplete = {
      testID: _exam.Id,
      QuestionsAnsweredIDs: _exam.Questions.map(q => q.Id),
      QuestionsGoodResponseID: _exam.Questions.filter(q => q.GoodResponse).map(p => p.Id),
      RetakeDate
    };

    _user.CompletedTest.push(completeExam);
    this.UpdateUser(_user);
  }
}



