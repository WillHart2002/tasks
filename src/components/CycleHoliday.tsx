import React, { useState } from "react";
import { Button } from "react-bootstrap";

type holi = "Halloween" | "Easter" | "Christmas" | "Thanksgiving" | "New Years";
export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<holi>("Christmas");
    function alphaHoli(): void {
        if (holiday === "Christmas") {
            setHoliday("Easter");
        } else if (holiday === "Easter") {
            setHoliday("Halloween");
        } else if (holiday === "Halloween") {
            setHoliday("New Years");
        } else if (holiday === "New Years") {
            setHoliday("Thanksgiving");
        } else {
            setHoliday("Christmas");
        }
    }
    function dateHoli(): void {
        if (holiday === "New Years") {
            setHoliday("Easter");
        } else if (holiday === "Easter") {
            setHoliday("Halloween");
        } else if (holiday === "Halloween") {
            setHoliday("Thanksgiving");
        } else if (holiday === "Thanksgiving") {
            setHoliday("Christmas");
        } else {
            setHoliday("New Years");
        }
    }
    function emoji(): string {
        if (holiday === "New Years") {
            return "🥂";
        } else if (holiday === "Easter") {
            return "🐇";
        } else if (holiday === "Halloween") {
            return "🎃";
        } else if (holiday === "Thanksgiving") {
            return "🦃";
        } else {
            return "🎁";
        }
    }
    return (
        <div>
            <div>
                <span>
                    Holiday: {emoji}
                    {holiday}
                </span>
            </div>
            <Button onClick={alphaHoli}>Advance by Alphabet</Button>
            <Button onClick={dateHoli}>Advance by Year</Button>
        </div>
    );
}
