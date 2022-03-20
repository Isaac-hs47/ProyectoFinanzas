import { BadgesCodes, BadgeTypes } from "../enum/enums";
import { Badge } from "./user";

export class AppConstants{

}

export const BADGES: Badge[] = [
    {
        Code: BadgesCodes.NEW_BEGINNING,
        Description: "Un nuevo comienzo",
        Type: BadgeTypes.Bronce
    },
    {
        Code: BadgesCodes.FIRST_HIT,
        Description: "Primer acierto",
        Type: BadgeTypes.Bronce
    },
    {
        Code: BadgesCodes.BEGINNER,
        Description: "Has alcanzado el primer nivel",
        Type: BadgeTypes.Bronce
    },
    {
        Code: BadgesCodes.INTERMEDIATE,
        Description: "Has alcanzado el nivel 5",
        Type: BadgeTypes.Bronce
    },
    {
        Code: BadgesCodes.EXPERT,
        Description: "Has alcanzado el máximo nivel",
        Type: BadgeTypes.Bronce
    }
]