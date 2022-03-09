import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [response, setResponse] = useState<string>("");
    function updateResponse(event: ChangeEvent) {
        setResponse(event.target.value);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <div>
                <Form.Group controlId="formResponse">
                    <Form.Label>What is the asnwer?</Form.Label>
                    <Form.Control
                        type="text"
                        value={response}
                        onChange={updateResponse}
                    />
                </Form.Group>
            </div>
            <div>
                {expectedAnswer === response && <div> ✔️ </div>}
                {expectedAnswer !== response && <div> ❌ </div>}
            </div>
        </div>
    );
}
