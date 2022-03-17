import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Quiz } from "../interfaces/quiz_int";

interface QuizListProps {
    quizzes: Quiz[];
    set: (newDhValue: number) => void;
    dhValue: number;
}

export function QuizList(): JSX.Element {
    return <Button> yehaw </Button>;
}
