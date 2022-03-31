import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Question } from "../interfaces/myQuestion";
import { QuizInterface } from "../interfaces/quiz_int";
import { QuestionComponent } from "./QuestionComponent";

interface QuizProps {
    quiz: QuizInterface;
    quizzes: QuizInterface[];
    setQuizzes: (newQuizzes: QuizInterface[]) => void;
}

export function Quiz({ quiz, quizzes, setQuizzes }: QuizProps): JSX.Element {
    const [questions, setQuestions] = useState<Question[]>(quiz.questions);
    const [visible, setVisible] = useState<boolean>(false);
    const [published, setPublished] = useState<boolean>(false);
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
            <h3> {quiz.name} </h3>
            <div>
                {" "}
                {quiz.description} with {questions.length} questions{" "}
            </div>
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
            {!visible && <Button onClick={isVisible}> enter quiz </Button>}
            {visible && <Button onClick={isVisible}> exit quiz </Button>}
            <Button onClick={deleteQuiz}> Delete quiz </Button>
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
            {visible && <Button onClick={addQuestion}> add question </Button>}
        </div>
    );
}
