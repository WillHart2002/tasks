import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;
const Colors = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "yellow",
    "pink",
    "cyan"
];

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("orange");

    function updateColor(event: ChangeEvent) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <Form.Check
                inline
                type="radio"
                name="color"
                onChange={updateColor}
                id="check-orange"
                label="Orange"
                value="orange"
                checked={color === "orange"}
            />
            <Form.Check
                inline
                type="radio"
                name="color"
                onChange={updateColor}
                id="check-blue"
                label="Blue"
                value="blue"
                checked={color === "blue"}
            />
            <Form.Check
                inline
                type="radio"
                name="color"
                onChange={updateColor}
                id="check-green"
                label="Green"
                value="green"
                checked={color === "green"}
            />
            <Form.Check
                inline
                type="radio"
                name="color"
                onChange={updateColor}
                id="check-red"
                label="Red"
                value="red"
                checked={color === "red"}
            />
            <Form.Check
                inline
                type="radio"
                name="color"
                onChange={updateColor}
                id="check-yellow"
                label="Yellow"
                value="yellow"
                checked={color === "yellow"}
            />
            <Form.Check
                inline
                type="radio"
                name="color"
                onChange={updateColor}
                id="check-purple"
                label="Purple"
                value="purple"
                checked={color === "purple"}
            />
            <Form.Check
                inline
                type="radio"
                name="color"
                onChange={updateColor}
                id="check-pink"
                label="Pink"
                value="pink"
                checked={color === "pink"}
            />
            <Form.Check
                inline
                type="radio"
                name="color"
                onChange={updateColor}
                id="check-cyan"
                label="Cyan"
                value="cyan"
                checked={color === "cyan"}
            />
            <div>
                You have choosen{" "}
                <span
                    data-testid="colored-box"
                    style={{
                        backgroundColor: Colors.find(
                            (colormap: string): boolean => colormap === color
                        )
                    }}
                >
                    {Colors.find(
                        (colormap: string): boolean => colormap === color
                    )}
                </span>
            </div>
        </div>
    );
}
