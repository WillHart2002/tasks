import React from "react";
import { render, screen } from "@testing-library/react";
import { Quizzer } from "./Quizzer";

describe("Quizzer Tests", () => {
    beforeEach(() => {
        render(<Quizzer />);
    });
    test("The Quizzer renders", () => {
        // Up to you to decide what your tests are!
        // Add more tests, more components, more test files!
    });
});

describe("Sketch test", () => {
    beforeEach(() => {
        render(<Quizzer />);
    });
    test("The sketch renders", () => {
        const isImg = screen.getAllByAltText("Should be a picture here");
        expect(isImg).toEqual("Should be a picture here");
    });
});
