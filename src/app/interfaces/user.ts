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
}

export interface Badge{
    Code: number;
    Description: string;
    Type: BadgeTypes;
}