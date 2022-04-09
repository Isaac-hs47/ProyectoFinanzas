import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Examenes } from 'src/app/interfaces/constants';
import { Exam } from 'src/app/interfaces/exam';
import { ExamModalComponent } from './exam-modal/exam-modal.component';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css']
})
export class ExamsComponent implements OnInit {
  exams!: Exam[];
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {

    this.exams = [...Examenes];
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

  OpenExamModal(examId: number): void {
    const dialogRef = this.dialog.open(ExamModalComponent, {
      width: '800px',
      height: "400px",
      disableClose: true,
      data: {...this.exams.find(ex => ex.Id === examId)},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.exams = [...Examenes];
    });
  }
}
