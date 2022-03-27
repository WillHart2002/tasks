import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuizInterface } from "../interfaces/quiz_int";
import { spongeQuiz } from "../interfaces/quiz_int";
//import { Question } from "../interfaces/question";
import { Quiz } from "./Quiz";

interface QuizListProps {
    setQuizzes: (newQuiz: QuizInterface[]) => void;
    quizzes: QuizInterface[];
}

function addQuiz({ setQuizzes, quizzes }: QuizListProps): void {
    const newQuizzes = [
        ...quizzes,
        {
            name: "Empty Quiz Name",
            description: "Empty Quiz Description",
            points: 0,
            questions: []
        }
    ];
    setQuizzes(newQuizzes);
}

export function QuizList(): JSX.Element {
    const [quizzes, setQuizzes] = useState<QuizInterface[]>([spongeQuiz]);
    return (
        <div>
            {quizzes.map((quiz: QuizInterface) => (
                <div key={quiz.name}>
                    <Quiz
                        name={quiz.name}
                        description={quiz.description}
                        points={quiz.points}
                        questions={quiz.questions}
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
