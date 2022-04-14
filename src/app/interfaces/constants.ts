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

export const Examenes: Exam[] = [
  {
    "Id": 1,
    "Name": "Prueba1",
    "IsComplete": false,
    "Questions": [
      {
        "Id": 1,
        "GoodResponse": false,
        "Description": "Que es el sol?",
        "Answers": [
          {
            "Id": 1,
            "IsSelected": false,
            "Description": "Estrella",
            "IsCorrect": true,
            "XP": 5
          },
          {
            "Id": 2,
            "IsSelected": false,
            "Description": "Planeta",
            "IsCorrect": false,
            "XP": 0
          },
          {
            "Id": 3,
            "IsSelected": false,
            "Description": "Galaxia",
            "IsCorrect": false,
            "XP": 0
          }
        ]
      },

      {
        "Id": 2,
        "GoodResponse": false,
        "Description": "En que año ocurrio la segunda guerra mundial?",
        "Answers": [
          {
            "Id": 1,
            "IsSelected": false,
            "Description": "1914",
            "IsCorrect": false,
            "XP": 0
          },
          {
            "Id": 2,
            "IsSelected": false,
            "Description": "1930",
            "IsCorrect": false,
            "XP": 0
          },
          {
            "Id": 3,
            "IsSelected": false,
            "Description": "1939",
            "IsCorrect": true,
            "XP": 7
          }
        ]
      },
      {
        "Id": 3,
        "GoodResponse": false,
        "Description": "Quien fue Donald Trump?",
        "Answers": [
          {
            "Id": 1,
            "IsSelected": false,
            "Description": "Presidente de Estados Unidos",
            "IsCorrect": true,
            "XP": 9
          },
          {
            "Id": 2,
            "IsSelected": false,
            "Description": "Nadie",
            "IsCorrect": false,
            "XP": 0
          },
          {
            "Id": 3,
            "IsSelected": false,
            "Description": "Fundador de McDonalds",
            "IsCorrect": false,
            "XP": 0
          }
        ]
      }
    ]
  },
  {
    "Id": 2,
    "Name": "Prueba2",
    "IsComplete": false,
    "Questions": [
      {
        "Id": 1,
        "GoodResponse": false,
        "Description": "Que es el sol?",
        "Answers": [
          {
            "Id": 1,
            "IsSelected": false,
            "Description": "Estrella",
            "IsCorrect": true,
            "XP": 70
          },
          {
            "Id": 2,
            "IsSelected": false,
            "Description": "Planeta",
            "IsCorrect": false,
            "XP": 0
          },
          {
            "Id": 3,
            "IsSelected": false,
            "Description": "Galaxia",
            "IsCorrect": false,
            "XP": 0
          }
        ]
      },

      {
        "Id": 2,
        "GoodResponse": false,
        "Description": "En que año ocurrio la segunda guerra mundial?",
        "Answers": [
          {
            "Id": 1,
            "IsSelected": false,
            "Description": "1914",
            "IsCorrect": false,
            "XP": 0
          },
          {
            "Id": 2,
            "IsSelected": false,
            "Description": "1930",
            "IsCorrect": false,
            "XP": 0
          },
          {
            "Id": 3,
            "IsSelected": false,
            "Description": "1939",
            "IsCorrect": true,
            "XP": 7
          }
        ]
      },
      {
        "Id": 3,
        "GoodResponse": false,
        "Description": "Quien fue Donald Trump?",
        "Answers": [
          {
            "Id": 1,
            "IsSelected": false,
            "Description": "Presidente de Estados Unidos",
            "IsCorrect": true,
            "XP": 9
          },
          {
            "Id": 2,
            "IsSelected": false,
            "Description": "Nadie",
            "IsCorrect": false,
            "XP": 0
          },
          {
            "Id": 3,
            "IsSelected": false,
            "Description": "Fundador de McDonalds",
            "IsCorrect": false,
            "XP": 0
          }
        ]
      }
    ]
  }
];
