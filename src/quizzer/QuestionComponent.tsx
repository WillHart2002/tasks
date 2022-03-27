import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { multQuest } from "../interfaces/multQuest";
import { Question } from "../interfaces/question";
import { shortQuest } from "../interfaces/shortQuest";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function ShortAnswerQuest({ expected }: shortQuest): JSX.Element {
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
                {expected === response && <div> ✔️ </div>}
                {expected !== response && <div> ❌ </div>}
            </div>
        </div>
    );
}

export function MultipleChoiceQuestion({
    options,
    expected
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
            <div> {expected === choice && <div> ✔️ </div>} </div>
            <div> {expected !== choice && <div> ❌ </div>} </div>
        </div>
    );
}

export function QuestionComponent({
    id,
    name,
    body,
    type,
    options,
    expected,
    points,
    published
}: Question): JSX.Element {
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
            <div>{name}</div>
            <div>
                {" "}
                points: {points}, published: {published}{" "}
            </div>
            {type === "multiple_choice_question" && (
                <MultipleChoiceQuestion
                    options={options}
                    expected={expected}
                ></MultipleChoiceQuestion>
            )}
            {type === "short_answer_question" && (
                <ShortAnswerQuest expected={expected}></ShortAnswerQuest>
            )}
        </div>
    );
}
