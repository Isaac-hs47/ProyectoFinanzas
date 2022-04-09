export interface Exam {
  Id: number;
  IsComplete: boolean;
  Name: string;
  Questions: Question[];
}

export interface Question{
  Id: number;
  Description: string;
  GoodResponse: boolean;
  Answers: Answer[];
}

export interface Answer{
  Id: number;
  IsSelected: boolean;
  Description:string;
  IsCorrect: boolean;
  XP: number;
}
