import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
//import { QuestionType } from "../interfaces/question";
import { Question } from "../interfaces/question";
import { spongeQuest1 } from "../interfaces/question";
import { spongeQuest2 } from "../interfaces/question";
import { QuizInterface } from "../interfaces/quiz_int";
import { QuestionComponent } from "./QuestionComponent";

interface QuizProps {
    setQuestions: (newQuestions: Question[]) => void;
    Questions: Question[];
}

function addQuestion({ setQuestions, Questions }: QuizProps): void {
    const newQuestions = [
        ...Questions,
        {
            id: Math.floor(Math.random() * 100),
            name: "Blank Question",
            body: "Blank Question Body",
            type: "multiple_choice_question",
            options: ["a", "b", "c", "d"],
            expected: "c",
            points: 0,
            published: false
        }
    ];
    setQuestions(newQuestions);
}

export function Quiz({
    name,
    description,
    points,
    questions
}: QuizInterface): JSX.Element {
    const [Questions, setQuestions] = useState<Question[]>([
        spongeQuest1,
        spongeQuest2
    ]);
    return (
        <div>
            <h2> {name} </h2>
            <div> {description} </div>
            <h5>points: {points}</h5>
            {questions.map((Quest: Question) => (
                <div key={Quest.id}>
                    <QuestionComponent
                        id={Quest.id}
                        name={Quest.name}
                        body={Quest.body}
                        type={Quest.type}
                        options={Quest.options}
                        expected={Quest.expected}
                        points={Quest.points}
                        published={Quest.published}
                    ></QuestionComponent>
                </div>
            ))}
            <Button onClick={() => addQuestion({ setQuestions, Questions })}>
                {" "}
                add question{" "}
            </Button>
            <hr></hr>
        </div>
    );
}
