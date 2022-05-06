import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExamLevels, StorageVariables } from 'src/app/enum/enums';
import { Exam } from 'src/app/interfaces/exam';
import { TestComplete, User } from 'src/app/interfaces/user';
import { CommonService } from 'src/app/services/common.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { ExamModalComponent } from './exam-modal/exam-modal.component';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css']
})
export class ExamsComponent implements OnInit {
  exams!: Exam[];
  currUser!: User;
  userCompletedExams!: TestComplete[];
  baseUrl: string = "../../../assets/img/";

  constructor(private dialog: MatDialog, private localStorage: LocalstorageService, private commonService: CommonService) { }

  ngOnInit(): void {

    this.commonService.GetJson<Exam>("exams").subscribe({
      next: (next) => {
        this.exams = [...next];
      }
    });
    this.currUser = this.localStorage.GetStorageVariable<User>(StorageVariables.SESSION, {} as User);
    this.userCompletedExams = [...this.currUser.CompletedTest];

  }

  GetExamTotalExperience(_examId: number): number{
    let totalXP = 0;

    this.exams.find(ex => ex.Id == _examId)?.Questions.forEach(q => {
      q.Answers.forEach(ans => {
        if(ans.IsCorrect)
        {
          totalXP += ans.XP;
        }
        });
    })

    return totalXP;
  }

  GetExamImg(type: ExamLevels): string
  {

    switch(type)
    {
      case ExamLevels.BASIC:
        return `${this.baseUrl}basic_exam.png`;
      case ExamLevels.INTERMEDIATE:
        return `${this.baseUrl}intermediate_exam.png`;
        case ExamLevels.ADVANCE:
          return `${this.baseUrl}advance_exam.png`;
        default:
          return `${this.baseUrl}logo_exams.jpeg`;
    }
  }

  OpenExamModal(examId: number): void {
    const dialogRef = this.dialog.open(ExamModalComponent, {
      width: '800px',
      height: "400px",
      disableClose: true,
      data: {...this.exams.find(ex => ex.Id === examId)},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.exams.forEach(ex => {
        ex.Questions.forEach(qu =>{
          qu.Answers.forEach(ans =>{
            ans.IsSelected = false;
          });
        });
      });
      this.ngOnInit();
    });
  }

  ExamIsComplete(_examID: number): boolean
  {
    return this.userCompletedExams.some(ex => ex.testID === _examID) && new Date(this.userCompletedExams.find(ex => ex.testID === _examID)?.RetakeDate ?? new Date()) > new Date();
  }

  GetGoodAnsweredQuesitons(_examID: number): number{
    return this.userCompletedExams.find(ex => ex.testID === _examID)?.QuestionsGoodResponseID.length ?? 0;
  }
  GetExamRetakeDate(_examID: number): string{
    return formatDate(this.userCompletedExams.find(ex => ex.testID === _examID)?.RetakeDate ?? "", "dd MMM HH:mm a", "en");
  }
}
