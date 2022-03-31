import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import { Question } from "../interfaces/myQuestion";
import { QuizInterface } from "../interfaces/quiz_int";
import { spongeQuiz } from "../interfaces/quiz_int";
import { Quiz } from "./Quiz";

export function QuizList(): JSX.Element {
    const [quizzes, setQuizzes] = useState<QuizInterface[]>([spongeQuiz]);
    //const [totalPoints, setTotalPoints] = useState<number>(0);
    function addQuiz(): void {
        const newQuizzes = [
            ...quizzes,
            {
                name: "Empty Quiz Name",
                description: "Empty Quiz Description",
                points: 0,
                questions: [],
                quizId: Math.floor(Math.random() * 100)
            }
        ];
        setQuizzes(newQuizzes);
    }
    /*
    function checkPoints(): void {
        quizzes.map((quiz: QuizInterface) =>
            quiz.questions.map((quest: Question) =>
                quest.correctPoints > 0
                    ? setTotalPoints(totalPoints + quest.correctPoints)
                    : setTotalPoints(totalPoints)
            )
        );
    }
    */
    return (
        <div>
            <h1> Quizzer </h1>
            <span>
                {" "}
                total points: 0{/*totalPoints*/}{" "}
                <Button> recalculate points </Button>
            </span>
            <hr></hr>
            {quizzes.map((quiz: QuizInterface) => (
                <div key={quiz.name}>
                    <Quiz
                        quiz={quiz}
                        quizzes={quizzes}
                        setQuizzes={setQuizzes}
                    ></Quiz>
                    <hr></hr>
                </div>
            ))}
            <Button onClick={addQuiz}> add Quiz </Button>
        </div>
    );
}
