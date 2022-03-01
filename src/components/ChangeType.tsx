import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [questType, setQuestType] = useState<QuestionType>(
        "short_answer_question"
    );
    function flipType(): void {
        questType === "short_answer_question"
            ? setQuestType("multiple_choice_question")
            : setQuestType("short_answer_question");
    }
    return (
        <div>
            <Button onClick={flipType}> Change type </Button>
            Current type:
            {questType === "short_answer_question" ? (
                <span> Short Answer </span>
            ) : (
                <span> Multiple Choice </span>
            )}
        </div>
    );
}
