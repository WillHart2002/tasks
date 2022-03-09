import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestAttempts, setRequestAttempts] = useState<number>(0);
    return (
        <div>
            <h3>Give Attempts</h3>
            <div>
                <Form.Group controlId="formAttempt">
                    <Form.Label>How many attempts do you want?</Form.Label>
                    <Form.Control
                        type="number"
                        value={requestAttempts}
                        onChange={(event: ChangeEvent) =>
                            setRequestAttempts(
                                parseInt(event.target.value) || 0
                            )
                        }
                    />
                </Form.Group>
            </div>
            <div>
                <Button
                    onClick={() => setAttemptsLeft(attemptsLeft - 1)}
                    disabled={attemptsLeft === 0}
                >
                    use
                </Button>
                <Button
                    onClick={() =>
                        setAttemptsLeft(attemptsLeft + requestAttempts)
                    }
                >
                    gain
                </Button>
            </div>
            <div>you have {attemptsLeft} attempts</div>
        </div>
    );
}
