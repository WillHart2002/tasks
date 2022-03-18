import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Question } from "../interfaces/question";
import { QuizInterface } from "../interfaces/quiz_int";
import { QuestionComponent } from "./QuestionComponent";

const spongeQuests = [
    {
        id: 101,
        name: "What is the name of Spongebobs pet",
        body: "it rhymes with Harry",
        type: "multiple_choice_question",
        options: ["sparry", "lary", "gary"],
        expected: "gary",
        points: 0,
        published: false
    },
    {
        id: 102,
        name: "What is the color of Spongebobs tie",
        body: "some description",
        type: "multiple_choice_question",
        options: ["blue", "red", "green"],
        expected: "red",
        points: 0,
        published: false
    }
];

interface QuizProps {
    setQuestions: (newQuestions: Question[]) => void;
    Questions: Question[];
}

function addQuestion({ setQuestions, Questions }: QuizProps): void {
    const newQuestions = [
        ...Questions,
        {
            id: 7,
            name: "Blank Question",
            body: "Blank Question Body",
            type: "multiple_choice_question",
            options: [],
            expected: "",
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
    const [Questions, setQuestions] = useState<Question[]>(spongeQuests);
    return (
        <div>
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
                add quiz{" "}
            </Button>
        </div>
    );
}
