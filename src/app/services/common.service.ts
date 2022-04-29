import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BadgesCodes } from '../enum/enums';
import { BADGES, Levels } from '../interfaces/constants';
import { Exam } from '../interfaces/exam';
import { Badge, User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  GetMidLevel(): number
  {
    return parseInt((Math.max(...Levels.map(l => l.Level)) / 2).toString());
  }

  GetJson<T>(_file: string): Observable<T[]>{
    return this.http.get<T[]>(`./assets/${_file}.json`);
  }
}
