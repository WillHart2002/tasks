import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [student, setStudent] = useState<string>("Your Name");

    function updateStudent(event: ChangeEvent): void {
        setStudent(event.target.value);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                <Form.Check
                    type="switch"
                    id="editMode"
                    label="Edit?"
                    checked={editMode}
                    onChange={() => setEditMode(!editMode)}
                />
            </div>
            <div>
                {editMode && (
                    <Form.Check
                        type="switch"
                        id="isStudent"
                        label="Are you a student?"
                        checked={isStudent}
                        disabled={!editMode}
                        onChange={() => setIsStudent(!isStudent)}
                    />
                )}
                {editMode && (
                    <Form.Group controlId="nameResponse">
                        <Form.Label>What is your name?</Form.Label>
                        <Form.Control
                            type="text"
                            value={student}
                            onChange={updateStudent}
                            disabled={!editMode}
                        />
                    </Form.Group>
                )}
            </div>
            <div>
                {editMode === false && isStudent === true && (
                    <div> {student} is a student </div>
                )}
                {editMode === false && isStudent === false && (
                    <div> {student} is not a student </div>
                )}
            </div>
        </div>
    );
}
