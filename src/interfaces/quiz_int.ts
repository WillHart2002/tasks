import { Question } from "./question";

export interface QuizInterface {
    name: string; //name of quiz
    description: string; //description of quiz
    points: number; //points a quiz holds
    questions: Question[]; //list of Question objects
}
