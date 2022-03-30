import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Question } from "../interfaces/myQuestion";
import { spongeQuest1 } from "../interfaces/myQuestion";
import { spongeQuest2 } from "../interfaces/myQuestion";
import { QuizInterface } from "../interfaces/quiz_int";
import { QuestionComponent } from "./QuestionComponent";

interface QuizProps {
    quiz: QuizInterface;
    quizzes: QuizInterface[];
    setQuizzes: (newQuizzes: QuizInterface[]) => void;
    //setQuestions: (newQuestions: Question[]) => void;
    //Questions: Question[];
    //setQuizPoints: (newPoints: number) => void;
    //quizPoints: number;
}
/*
function checkCorrect(
    { Questions, setQuizPoints, quizPoints }: QuizProps,
    { correctQuizPoints }: QuizInterface
): void {
    Questions.map((quest: Question) =>
        quest.correct === true
            ? setQuizPoints(quizPoints + quest.correctPoints)
            : setQuizPoints(quizPoints)
    );
    correctQuizPoints = quizPoints;
}
*/

export function Quiz({ quiz, quizzes, setQuizzes }: QuizProps): JSX.Element {
    const [questions, setQuestions] = useState<Question[]>(quiz.questions);
    function addQuestion(): void {
        const blankQuestion: Question = {
            id: Math.floor(Math.random() * 100),
            name: "Blank Question",
            body: "Blank Question Body",
            type: "multiple_choice_question",
            options: ["a", "b", "c", "d"],
            expected: "c",
            points: 0,
            published: false,
            correct: false,
            correctPoints: 0
        };
        const newQuestions = [...questions, blankQuestion];
        setQuestions(newQuestions);
    }
    return (
        <div>
            <h3> {quiz.name} </h3>
            <h5> points: {quiz.points} </h5>
            {questions.map((quest: Question) => (
                <div key={quest.id}>
                    <QuestionComponent
                        question={quest}
                        questions={questions}
                        setQuestions={setQuestions}
                    ></QuestionComponent>
                </div>
            ))}
            <Button onClick={addQuestion}> add question </Button>
        </div>
    );
}

/*
export function Quiz({
    name,
    description,
    points,
    questions,
    correctQuizPoints
}: QuizInterface): JSX.Element {
    const [Questions, setQuestions] = useState<Question[]>([
        spongeQuest1,
        spongeQuest2
    ]);
    function addQuestion(): void {
        const blankQuestion: Question = {
            id: Math.floor(Math.random() * 100),
            name: "Blank Question",
            body: "Blank Question Body",
            type: "multiple_choice_question",
            options: ["a", "b", "c", "d"],
            expected: "c",
            points: 0,
            published: false,
            correct: false,
            correctPoints: 0
        };
        const newQuestions = [...Questions, blankQuestion];
        setQuestions(newQuestions);
    }
    //const [quizPoints, setQuizPoints] = useState<number>(0);
    return (
        <div>
            {() =>
                //is this how you do it?
                checkCorrect(
                    { Questions, setQuestions, setQuizPoints, quizPoints },
                    { name, description, points, questions, correctQuizPoints }
                )
                }
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
                        correct={Quest.correct}
                        correctPoints={Quest.correctPoints}
                    ></QuestionComponent>
                </div>
            ))}
            <Button onClick={addQuestion}> add question </Button>
            <hr></hr>
        </div>
    );
}
*/
