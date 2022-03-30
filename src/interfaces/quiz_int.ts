import { Question } from "./myQuestion";
import { spongeQuest1 } from "./myQuestion";
import { spongeQuest2 } from "./myQuestion";

export interface QuizInterface {
    name: string; //name of quiz
    description: string; //description of quiz
    points: number; //points a quiz holds
    questions: Question[]; //list of Question objects
    correctQuizPoints: number; //number of correct points in whole quiz
}

export const spongeQuiz = {
    name: "Spongebob Quiz",
    description: "A quiz about everything Spongbob",
    points: 10,
    questions: [spongeQuest1, spongeQuest2],
    correctQuizPoints: 0
};
