import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { BadgesCodes, BadgeTypes, StorageVariables } from 'src/app/enum/enums';
import { BADGES, Levels } from 'src/app/interfaces/constants';
import { Answer, Exam, Question } from 'src/app/interfaces/exam';
import { Badge, ExperienceLevel, User } from 'src/app/interfaces/user';
import { AlertService } from 'src/app/services/alert.service';
import { CommonService } from 'src/app/services/common.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-exam-modal',
  templateUrl: './exam-modal.component.html',
  styleUrls: ['./exam-modal.component.css']
})
export class ExamModalComponent implements OnInit {
  currentQuestionIndex!: number;
  currentUser!: User;
  enableCloseButton!: boolean;
  enableAllTabs!:boolean;
  showResults!: boolean;
  levels!: ExperienceLevel[];
  midLevel!: number;
  constructor(public dialogRef: MatDialogRef<ExamModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Exam,
    private userService: UserService,
    private localStorage: LocalstorageService,
    private alertService: AlertService,
    private commonService: CommonService) { }

  ngOnInit(): void {
    this.currentUser= this.localStorage.GetStorageVariable<User>(StorageVariables.SESSION, {} as User);
    this.currentQuestionIndex = 0;
    this.enableCloseButton = false;
    this.showResults = false;
    this.levels = [...Levels];
    this.midLevel = this.commonService.GetMidLevel();
  }

  toString(num: number): string{
    return num.toString();
  }

  OnAnswerClick(answer: Answer, question: Question, tabs: MatTabGroup): void
  {
    if(this.enableAllTabs) return;

    if(answer.IsCorrect)
    {
      this.userService.GiveBadge(this.currentUser, BadgesCodes.FIRST_HIT);

      this.alertService.GoodResponse("Muy bien!!!");

      question.GoodResponse = true;

      this.currentUser.Level.CurrentXP += answer.XP;

      this.currentUser.Level.AllObtainedXP += answer.XP;

      if(this.currentUser.Level.CurrentXP >= this.currentUser.Level.NeededXP &&
        this.currentUser.Level.CurrentLevel <= this.levels.length)
      {
        this.currentUser.Level.CurrentLevel++;

        this.currentUser.Level.CurrentXP = (this.currentUser.Level.CurrentXP - this.currentUser.Level.NeededXP);

        if(this.currentUser.Level.CurrentLevel === this.levels.length)
        {
          this.userService.GiveBadge(this.currentUser, BadgesCodes.EXPERT);
        }
        else
        {
          this.alertService.NewLavelObteined(`Felicitaciones!!! Has subido de nivel`);

          this.currentUser.Level.NeededXP = this.levels.find(lvl => lvl.Level === this.currentUser.Level.CurrentLevel+1)?.NeededXP ?? 0;
        }

        if(this.currentUser.Level.CurrentLevel === this.midLevel) this.userService.GiveBadge(this.currentUser, BadgesCodes.INTERMEDIATE);
      }

      this.userService.UpdateUser(this.currentUser);
    }
    else
    {
      this.alertService.BadResponse("Incorrecto!!");
    }


    this.currentQuestionIndex++;

    if(this.currentQuestionIndex === tabs._tabs.length)
    {
      this.enableCloseButton = true;

      this.enableAllTabs = true;

      this.showResults = true;

      this.userService.UpdateCompletedTest(this.currentUser, this.data);

      this.userService.GiveBadge(this.currentUser, BadgesCodes.FIRST_TEST);
    }

    tabs.selectedIndex = this.currentQuestionIndex;

    setTimeout(()=>answer.IsSelected = true,0);
  }

  EnabledTab(index: number): boolean
  {
    return this.currentQuestionIndex === this.data.Questions.length || this.enableAllTabs || index === this.currentQuestionIndex;
  }

  ShowOptionResult(ans: Answer): string
  {
    let _class = "";

    if(this.showResults)
    {
      if(ans.IsSelected)
      {
        if(!ans.IsCorrect)
        {
          _class = "bad-answer";
        }
        else
        {
          _class = "good-answer";
        }
      }
      else if(ans.IsCorrect)
      {
        _class = "good-answer";
      }
    }

    return _class;
  }

  CloseModal(): void{
    this.data = {} as Exam;
    this.enableAllTabs = false;
    this.currentQuestionIndex = 0;
    this.showResults = false;
    this.enableCloseButton = false;
    this.dialogRef.close();
  }
}
