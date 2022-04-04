import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
//import { multQuest } from "../interfaces/multQuest";
import { Question } from "../interfaces/myQuestion";
//import { shortQuest } from "../interfaces/shortQuest";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

interface QuestComponentProps {
    question: Question;
    questions: Question[];
    setQuestions: (newQuestions: Question[]) => void;
}

export function QuestionComponent({
    question,
    questions,
    setQuestions
}: QuestComponentProps): JSX.Element {
    const [response, setResponse] = useState<string>("");
    //const [correctPoints, setCorrectPoints] = useState<number>(0);
    //all editing states and editing state
    const [publishedState, newPublishedState] = useState<boolean>(
        question.published
    );
    const [nameState, newNameState] = useState<string>(question.name);
    const [bodyState, newBodyState] = useState<string>(question.body);
    const [typeState, newTypeState] = useState<string>(question.type);
    const [optionState, newOptionState] = useState<string>(
        question.options.join("-")
    );
    const [expectedState, newExpectedState] = useState<string>(
        question.expected
    );
    const [pointsState, newPointsState] = useState<number>(question.points);
    const [editMode, setEditMode] = useState<boolean>(false);
    //seeeeesh
    function updateResponse(event: ChangeEvent) {
        setResponse(event.target.value);
    }
    function switchQuestType(): void {
        if (typeState === "multiple_choice_question") {
            newTypeState("short_answer_question");
        } else {
            newTypeState("multiple_choice_question");
        }
    }
    function clearAns(): void {
        setResponse("");
    }
    function shiftQuestUp(): void {
        const questIndex = questions.findIndex(
            (quest: Question): boolean => quest.id === question.id
        );
        if (questIndex != 0) {
            const questArray = questions.filter(
                (quest: Question): boolean => quest.id !== question.id
            );
            questArray.splice(questIndex - 1, 0, question);
            setQuestions(questArray);
        }
    }
    function shiftQuestDown(): void {
        const questIndex = questions.findIndex(
            (quest: Question): boolean => quest.id === question.id
        );
        if (questIndex != questions.length - 1) {
            const questArray = questions.filter(
                (quest: Question): boolean => quest.id !== question.id
            );
            questArray.splice(questIndex + 1, 0, question);
            setQuestions(questArray);
        }
    }
    function deleteQuest(): void {
        const modifiedQuest = questions.filter(
            (quest: Question): boolean => quest.id !== question.id
        );
        setQuestions(modifiedQuest);
    }
    function saveQuest(): void {
        setEditMode(false);
        const targetQuest = question.id;
        const questArray = [...questions];
        const quest = {
            id: question.id,
            name: nameState,
            body: bodyState,
            type: typeState,
            options: optionState.split("-"),
            expected: expectedState,
            points: pointsState,
            published: publishedState
            //correctPoints: correctPoints
        };
        const targetIndex = questions.findIndex(
            (quest: Question): boolean => quest.id === targetQuest
        );
        questArray.splice(targetIndex, 1, quest);
        setQuestions(questArray);
    }
    /*
    function calcPoints(): void {
        if (response === question.expected) {
            setCorrectPoints(question.points);
        }
    }
    */
    return (
        <div data-testid="div-question-Component">
            <div data-testid="div-edit-switch">
                <Form.Check
                    data-testid="edit-switch"
                    type="switch"
                    id="editMode"
                    label="Edit question?"
                    checked={editMode}
                    onChange={() => setEditMode(!editMode)}
                />
            </div>
            {editMode && (
                <div data-testid="div-editable-states">
                    <hr></hr>
                    <Form.Group controlId="quest-group">
                        <Form.Label> Question name </Form.Label>
                        <Form.Control
                            data-testid="questName-control"
                            type="text"
                            value={nameState}
                            onChange={(event: ChangeEvent) =>
                                newNameState(event.target.value)
                            }
                            disabled={!editMode}
                        />
                        <Form.Label> Question body </Form.Label>
                        <Form.Control
                            data-testid="questBody-control"
                            type="text"
                            value={bodyState}
                            onChange={(event: ChangeEvent) =>
                                newBodyState(event.target.value)
                            }
                            disabled={!editMode}
                        />
                        <Form.Label> Question type </Form.Label>
                        <Form.Check
                            type="switch"
                            data-testid="questType-check"
                            label="Switch between multiple choice and free response"
                            checked={typeState === "multiple_choice_question"}
                            disabled={!editMode}
                            onChange={switchQuestType}
                        />
                        {typeState === "multiple_choice_question" && (
                            <Form.Group controlId="options-group">
                                <Form.Label>
                                    {" "}
                                    Question options (seperate with - character)
                                </Form.Label>
                                <Form.Control
                                    data-testid="questOptions-control"
                                    type="text"
                                    value={optionState}
                                    onChange={(event: ChangeEvent) =>
                                        newOptionState(event.target.value)
                                    }
                                    disabled={!editMode}
                                />
                            </Form.Group>
                        )}
                        <Form.Label> Question expected answer </Form.Label>
                        <Form.Control
                            data-testid="questExpected-control"
                            type="text"
                            value={expectedState}
                            onChange={(event: ChangeEvent) =>
                                newExpectedState(event.target.value)
                            }
                            disabled={!editMode}
                        />
                        <Form.Label> Question points </Form.Label>
                        <Form.Control
                            data-testid="questPoints-control"
                            type="number"
                            value={pointsState}
                            onChange={(event: ChangeEvent) =>
                                newPointsState(
                                    parseInt(event.target.value) || 0
                                )
                            }
                            disabled={!editMode}
                        />
                        <Form.Label> Question published </Form.Label>
                        <Form.Check
                            type="switch"
                            data-testid="questPublished-check"
                            label="Do you want to publish the question"
                            checked={publishedState === true}
                            disabled={!editMode}
                            onChange={() => newPublishedState(!publishedState)}
                        />
                    </Form.Group>
                    <Button onClick={saveQuest} data-testId="save-edit">
                        {" "}
                        save edit{" "}
                    </Button>
                    <hr></hr>
                </div>
            )}
            <strong data-testid="strong-quest-name">{question.name}</strong>
            <div data-testid="div-quest-points-pub">
                {" "}
                points: <span> {question.points} </span>, published:{" "}
                {question.published ? "true" : "false"}
            </div>
            <div data-testid="div-quest-body">
                hint (question body): <span> {question.body} </span>
            </div>
            <div data-testid="div-clear-delete-shift-buttons">
                <Button onClick={clearAns} data-testid="clear-button">
                    {" "}
                    Clear answer{" "}
                </Button>
                <Button onClick={deleteQuest} data-testid="delete-quest-button">
                    {" "}
                    Delete question{" "}
                </Button>
                <Button onClick={shiftQuestUp} data-testid="shiftup-button">
                    {" "}
                    Shift up{" "}
                </Button>
                <Button onClick={shiftQuestDown} data-testid="shiftdown-button">
                    {" "}
                    Shift down{" "}
                </Button>
            </div>
            {question.type === "multiple_choice_question" ? (
                <Form.Group controlId="multQuestion">
                    <Form.Select
                        value={response}
                        onChange={updateResponse}
                        data-testId="dropDown"
                    >
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
            <div data-testid="quest-correct">
                {response === question.expected && <div> ✔️ </div>}
                {response !== question.expected && <div> ❌ </div>}
            </div>
        </div>
    );
}
