import { queryByTestId } from "@testing-library/react";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Question } from "../interfaces/myQuestion";
import { QuizInterface } from "../interfaces/quiz_int";
import { spongeQuiz } from "../interfaces/quiz_int";
import { Quiz } from "./Quiz";

export function QuizList(): JSX.Element {
    const [quizzes, setQuizzes] = useState<QuizInterface[]>([spongeQuiz]);
    const [totalPoints, setTotalPoints] = useState<number>(0);
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
    function accumulatePoints(): void {
        quizzes.map((quiz: QuizInterface) =>
            quiz.questions.map((quest: Question) =>
                quest.correct === true
                    ? setTotalPoints(totalPoints + quest.points)
                    : setTotalPoints(totalPoints)
            )
        );
    }
    return (
        <div>
            <h1> Quizzer </h1>
            <span>
                {" "}
                total points: {totalPoints}{" "}
                <Button onClick={accumulatePoints}> recalculate points </Button>
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
