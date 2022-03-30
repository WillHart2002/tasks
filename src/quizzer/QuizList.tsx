import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuizInterface } from "../interfaces/quiz_int";
import { spongeQuiz } from "../interfaces/quiz_int";
import { Quiz } from "./Quiz";

export function QuizList(): JSX.Element {
    const [quizzes, setQuizzes] = useState<QuizInterface[]>([spongeQuiz]);
    function addQuiz(): void {
        const newQuizzes = [
            ...quizzes,
            {
                name: "Empty Quiz Name",
                description: "Empty Quiz Description",
                points: 0,
                questions: [],
                correctQuizPoints: 0
            }
        ];
        setQuizzes(newQuizzes);
    }
    return (
        <div>
            {quizzes.map((quiz: QuizInterface) => (
                <div key={quiz.name}>
                    <Quiz
                        quiz={quiz}
                        quizzes={quizzes}
                        setQuizzes={setQuizzes}
                    ></Quiz>
                </div>
            ))}
            <Button onClick={addQuiz}> add Quiz </Button>
        </div>
    );
}
/*
function checkPoints({ quizzes, setPoints, points }: QuizListProps): void {
    quizzes.map((quiz: QuizInterface) =>
        setPoints(points + quiz.correctQuizPoints)
    );
}
export function QuizList(): JSX.Element {
    const [quizzes, setQuizzes] = useState<QuizInterface[]>([spongeQuiz]);
    //const [points, setPoints] = useState<number>(0);
    return (
        <div>
            {checkPoints}
            <h4> Total points: {points} </h4>
            {quizzes.map((quiz: QuizInterface) => (
                <div key={quiz.name}>
                    <Quiz
                        name={quiz.name}
                        description={quiz.description}
                        points={quiz.points}
                        questions={quiz.questions}
                        correctQuizPoints={quiz.correctQuizPoints}
                    ></Quiz>
                </div>
            ))}
            <Button onClick={() => addQuiz({ setQuizzes, quizzes })}>
                {" "}
                add quiz{" "}
            </Button>
        </div>
    );
}
*/
