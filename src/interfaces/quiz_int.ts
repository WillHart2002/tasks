import { Question } from "./question";

export interface Quiz {
    name: string; //name of quiz
    descrption: string; //description of quiz
    points: number; //points a quiz holds
    questions: Question[]; //list of Question objects
}
