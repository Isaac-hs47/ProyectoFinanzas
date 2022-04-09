import { BadgeTypes } from "../enum/enums";

export interface User{
    Id: number;
    FullName: string;
    Username: string;
    Password: string;
    Level: Level;
    Badges: Badge[];
    ProfilePicturePath: string;
}

export interface Level{
    CurrentLevel: number;
    CurrentXP: number;
    NeededXP: number;
    AllObtainedXP: number;
}

export interface Badge{
    Code: number;
    Description: string;
    Type: BadgeTypes;
}

export interface ExperienceLevel{
  NeededXP: number;
  Level: number;
}
