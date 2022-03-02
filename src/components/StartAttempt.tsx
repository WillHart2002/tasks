import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(4);
    const [quizProg, setQuizState] = useState<boolean>(false);
    //start quiz button function
    function startQuiz(): void {
        setNumAttempts(numAttempts - 1);
        setQuizState(true);
    }
    function stopQuiz(): void {
        setQuizState(false);
    }
    function mulligan(): void {
        setNumAttempts(numAttempts + 1);
    }
    return (
        <div>
            <Button
                onClick={startQuiz}
                disabled={quizProg === true || numAttempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={quizProg === false}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={quizProg === true}>
                Mulligan
            </Button>
            <div>
                Number of Attempts: <span> {numAttempts} </span>
            </div>
        </div>
    );
}
