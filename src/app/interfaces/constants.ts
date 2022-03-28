import { BadgesCodes, BadgeTypes } from "../enum/enums";
import { MenuOption } from "./menu";
import { Badge } from "./user";

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
        Description: "Has alcanzado el nivel 5",
        Type: BadgeTypes.Silver
    },
    {
        Code: BadgesCodes.EXPERT,
        Description: "Has alcanzado el máximo nivel",
        Type: BadgeTypes.Gold
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
        redirectTo: "test"
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
