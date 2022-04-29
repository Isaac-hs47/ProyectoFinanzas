import { BadgesCodes, BadgeTypes } from "../enum/enums";
import { Exam } from "./exam";
import { MenuOption } from "./menu";
import { Badge, ExperienceLevel, Level } from "./user";

export class AppConstants{

}

export const BADGES: Badge[] = [
    {
        Code: BadgesCodes.NEW_BEGINNING,
        Description: "Un nuevo comienzo",
        Type: BadgeTypes.Bronze
    },
    {
        Code: BadgesCodes.FIRST_HIT,
        Description: "Primer acierto",
        Type: BadgeTypes.Bronze
    },
    {
        Code: BadgesCodes.BEGINNER,
        Description: "Has alcanzado el primer nivel",
        Type: BadgeTypes.Bronze
    },
    {
        Code: BadgesCodes.INTERMEDIATE,
        Description: "Mitad del camino completo",
        Type: BadgeTypes.Silver
    },
    {
        Code: BadgesCodes.EXPERT,
        Description: "Has alcanzado el máximo nivel",
        Type: BadgeTypes.Gold
    },
    {
      Code: BadgesCodes.FIRST_TEST,
      Description: "Has completado tu primer examen",
      Type: BadgeTypes.Bronze
    }
];

export const MENU: MenuOption[] = [
    {
        Icon: "home",
        Name: "Inicio",
        redirectTo:"home"
    },
    {
        Icon: "school",
        Name: "Aprendizaje",
        redirectTo: "learn"
    },
    {
        Icon: "checklist",
        Name: "Pruebas",
        redirectTo: "exams"
    },
    {
        Icon: "face",
        Name: "Perfil",
        redirectTo: "profile"
    },
    {
        Icon: "logout",
        Name: "Cerrar sesión",
        redirectTo: "login"
    }
];

export const Levels: ExperienceLevel[] =
[
  {
    Level: 1,
    NeededXP: 200
  },
  {
    Level: 2,
    NeededXP: 450
  },
  {
    Level: 3,
    NeededXP: 700
  },
  {
    Level: 4,
    NeededXP: 1050
  },
  {
    Level: 5,
    NeededXP: 1550
  },
  {
    Level: 6,
    NeededXP: 2100
  },
  {
    Level: 7,
    NeededXP: 2750
  },
  {
    Level: 8,
    NeededXP: 3500
  },
  {
    Level: 9,
    NeededXP: 5000
  },
  {
    Level: 10,
    NeededXP: 7545
  },
  {
    Level: 11,
    NeededXP: 10000
  }
]

