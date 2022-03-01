import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [diceLeft, setDiceLeft] = useState<number>(1);
    const [diceRight, setDiceRight] = useState<number>(2);
    function left(): void {
        setDiceLeft(d6);
    }
    function right(): void {
        setDiceRight(d6);
    }
    return (
        <div>
            <Button onClick={left}>Roll Left</Button>
            <span data-testid="left-die"> {diceLeft} </span>
            <Button onClick={right}>Roll Right</Button>
            <span data-testid="right-die"> {diceRight} </span>
            {diceLeft === diceRight && diceLeft !== 1 && <div> Win </div>}
            {diceLeft === 1 && diceRight === 1 && <div> Lose </div>}
        </div>
    );
}
