import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Question } from "../interfaces/myQuestion";
import { QuizInterface } from "../interfaces/quiz_int";
import { QuestionComponent } from "./QuestionComponent";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

interface QuizProps {
    quiz: QuizInterface;
    quizzes: QuizInterface[];
    setQuizzes: (newQuizzes: QuizInterface[]) => void;
}

export function Quiz({ quiz, quizzes, setQuizzes }: QuizProps): JSX.Element {
    const [questions, setQuestions] = useState<Question[]>(quiz.questions);
    const [visible, setVisible] = useState<boolean>(false);
    const [published, setPublished] = useState<boolean>(false);
    //editable components for a quiz
    const [nameState, newNameState] = useState<string>(quiz.name);
    const [desState, newDesState] = useState<string>(quiz.description);
    const [editMode, setEditMode] = useState<boolean>(false);
    //seeeesh
    //const [correctPoints, setCorrectPoints] = useState<number>(0);
    function addQuestion(): void {
        const blankQuestion: Question = {
            id: Math.floor(Math.random() * 100),
            name: "Blank Question",
            body: "Blank Question Body",
            type: "multiple_choice_question",
            options: ["a", "b", "c", "d"],
            expected: "c",
            points: 0,
            published: false
            //correctPoints: 0
        };
        const newQuestions = [...questions, blankQuestion];
        setQuestions(newQuestions);
    }
    function isVisible(): void {
        if (visible === false) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }
    function deleteQuiz(): void {
        const modifiedQuiz = quizzes.filter(
            (Quiz: QuizInterface): boolean => Quiz.quizId !== quiz.quizId
        );
        setQuizzes(modifiedQuiz);
    }
    /*
    function checkPoints(): void {
        questions.map((quest: Question) =>
            quest.correctPoints > 0
                ? setCorrectPoints(correctPoints + quest.correctPoints)
                : setCorrectPoints(correctPoints)
        );
    }
    */
    return (
        <div>
            <h3> {nameState} </h3>
            <div>
                {" "}
                <span> {desState} </span> with <span> {questions.length} </span>{" "}
                questions{" "}
            </div>
            <div data-testid="div-quizEdit-switch">
                <Form.Check
                    data-testid="quizEdit-switch"
                    type="switch"
                    id="editMode"
                    label="Edit quiz?"
                    checked={editMode}
                    onChange={() => setEditMode(!editMode)}
                />
            </div>
            {editMode && (
                <div>
                    <hr></hr>
                    <Form.Group controlId="quiz-group">
                        <Form.Label> Quiz name </Form.Label>
                        <Form.Control
                            data-testid="quizName-control"
                            type="text"
                            value={nameState}
                            onChange={(event: ChangeEvent) =>
                                newNameState(event.target.value)
                            }
                            disabled={!editMode}
                        />
                        <Form.Label> Quiz description </Form.Label>
                        <Form.Control
                            data-testid="questDescription-control"
                            type="text"
                            value={desState}
                            onChange={(event: ChangeEvent) =>
                                newDesState(event.target.value)
                            }
                            disabled={!editMode}
                        />
                    </Form.Group>
                    <hr></hr>
                </div>
            )}
            {visible && (
                <Form.Group>
                    <Form.Check
                        type="switch"
                        data-testid="quiz-filter-published-check"
                        label="Filter questions by published?"
                        checked={published === true}
                        onChange={() => setPublished(!published)}
                    />
                </Form.Group>
            )}
            {!visible && (
                <Button onClick={isVisible} data-testId="enter-button">
                    {" "}
                    enter quiz{" "}
                </Button>
            )}
            {visible && (
                <Button onClick={isVisible} data-testId="exit-button">
                    {" "}
                    exit quiz{" "}
                </Button>
            )}
            <Button onClick={deleteQuiz} data-testId="delete-quiz-button">
                {" "}
                Delete quiz{" "}
            </Button>
            <div> ----------------------------- </div>
            {visible &&
                !published &&
                questions.map((quest: Question) => (
                    <div key={quest.id}>
                        <QuestionComponent
                            question={quest}
                            questions={questions}
                            setQuestions={setQuestions}
                        ></QuestionComponent>
                    </div>
                ))}
            {visible &&
                published &&
                questions.map(
                    (quest: Question) =>
                        quest.published && (
                            <div key={quest.id}>
                                <QuestionComponent
                                    question={quest}
                                    questions={questions}
                                    setQuestions={setQuestions}
                                ></QuestionComponent>
                            </div>
                        )
                )}
            {visible && (
                <Button onClick={addQuestion} data-testId="add-question-button">
                    {" "}
                    add question{" "}
                </Button>
            )}
        </div>
    );
}
