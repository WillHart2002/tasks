import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { multQuest } from "../interfaces/multQuest";
import { Question } from "../interfaces/myQuestion";
import { shortQuest } from "../interfaces/shortQuest";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

interface QuestComponentProps {
    question: Question;
    questions: Question[];
    setQuestions: (newQuestions: Question[]) => void;
    //setIsCorrect: (newCorrectPoints: boolean) => void;
    //isCorrect: boolean;
}

export function QuestionComponent({
    question,
    questions,
    setQuestions
}: QuestComponentProps): JSX.Element {
    const [response, setResponse] = useState<string>("");
    //all editing states
    const [publishedState, newPublishedState] = useState<boolean>(
        question.published
    );
    const [idState, newIDState] = useState<number>(0);
    const [nameState, newNameState] = useState<string>("name here");
    const [bodyState, newBodyState] = useState<string>("body here");
    const [typeState, newTypeState] = useState<string>(
        "multiple_choice_question"
    );
    const [optionState, newOptionState] = useState<string[]>([
        "a",
        "b",
        "c",
        "d"
    ]);
    const [expectedState, newExpectedState] = useState<string>("c");
    const [pointsState, newPointsState] = useState<number>(0);
    //seeeeesh
    function updateResponse(event: ChangeEvent) {
        setResponse(event.target.value);
    }
    return (
        <div>
            <div>{question.name}</div>
            <div> points: {question.points}</div>
            <div> hint (question body): {question.body} </div>
            {question.type === "multiple_choice_question" ? (
                <Form.Group controlId="multQuestion">
                    <Form.Select value={response} onChange={updateResponse}>
                        {question.options.map((choice: string) => (
                            <option key={choice} value={choice}>
                                {choice}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            ) : (
                <Form.Group controlId="formResponse">
                    <Form.Control
                        type="text"
                        value={response}
                        onChange={updateResponse}
                    />
                </Form.Group>
            )}
            <div>
                {response === question.expected && <div> ✔️ </div>}
                {response !== question.expected && <div> ❌ </div>}
            </div>
        </div>
    );
}
/*
export function ShortAnswerQuest({
    expected,
    correct
}: shortQuest): JSX.Element {
    const [response, setResponse] = useState<string>("");
    function updateResponse(event: ChangeEvent) {
        setResponse(event.target.value);
    }
    return (
        <div>
            <div>
                <Form.Group controlId="formResponse">
                    <Form.Control
                        type="text"
                        value={response}
                        onChange={updateResponse}
                    />
                </Form.Group>
            </div>
            <div>
                {response === expected && <div> ✔️ </div>}
                {response !== expected && <div> ❌ </div>}
            </div>
        </div>
    );
}

export function MultipleChoiceQuestion({
    options,
    expected,
    correct
}: multQuest): JSX.Element {
    const [choice, setChoice] = useState<string>(options[0]);
    function updateChoice(event: ChangeEvent) {
        setChoice(event.target.value);
    }
    return (
        <div>
            <Form.Group controlId="multQuestion">
                <Form.Select value={choice} onChange={updateChoice}>
                    {options.map((choice: string) => (
                        <option key={choice} value={choice}>
                            {choice}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>
                {choice === expected && <div> ✔️ </div>}
                {choice !== expected && <div> ❌ </div>}
            </div>
        </div>
    );
}
/*
export function QuestionComponent({
    id,
    name,
    body,
    type,
    options,
    expected,
    points,
    published,
    correct,
    correctPoints
}: Question): JSX.Element {
    for editing
    const [idState, newIDState] = useState<number>(0);
    const [nameState, newNameState] = useState<string>("name here");
    const [bodyState, newBodyState] = useState<string>("body here");
    const [typeState, newTypeState] = useState<string>(
        "multiple_choice_question"
    );
    const [optionState, newOptionState] = useState<string[]>([
        "a",
        "b",
        "c",
        "d"
    ]);
    const [expectedState, newExpectedState] = useState<string>("c");
    const [pointsState, newPointsState] = useState<number>(0);
    const [publishedState, newPublishedState] = useState<boolean>(false);
    return (
        <div>
            <div>
                {name}, accumulated points: {correctPoints}
            </div>
            <div>
                {" "}
                points: {points}, published: {published}{" "}
            </div>
            {type === "multiple_choice_question" && (
                <MultipleChoiceQuestion
                    options={options}
                    expected={expected}
                    correct={correct}
                ></MultipleChoiceQuestion>
            )}
            {type === "short_answer_question" && (
                <ShortAnswerQuest
                    expected={expected}
                    correct={correct}
                ></ShortAnswerQuest>
            )}
        </div>
    );
}
*/
