import { Question } from "./question";
import { spongeQuest1 } from "./question";
import { spongeQuest2 } from "./question";

export interface QuizInterface {
    name: string; //name of quiz
    description: string; //description of quiz
    points: number; //points a quiz holds
    questions: Question[]; //list of Question objects
}

export const spongeQuiz = {
    name: "Spongebob Quiz",
    description: "A quiz about everything Spongbob",
    points: 10,
    questions: [spongeQuest1, spongeQuest2]
};
