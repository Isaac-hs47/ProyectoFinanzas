import { Injectable } from '@angular/core';
import { BadgesCodes } from '../enum/enums';
import { BADGES, Levels } from '../interfaces/constants';
import { Badge, User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  GetMidLevel(): number
  {
    return parseInt((Math.max(...Levels.map(l => l.Level)) / 2).toString());
  }
}
