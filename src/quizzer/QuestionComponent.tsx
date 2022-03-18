import React from "react";
import { Button } from "react-bootstrap";
import { Question } from "../interfaces/question";

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
    return (
        <div>
            <Button> ooof </Button>
        </div>
    );
}
