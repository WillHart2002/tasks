import React from "react";
import { render, screen } from "@testing-library/react";
import { Question } from "../interfaces/myQuestion";
import { QuestionComponent } from "./QuestionComponent";
import userEvent from "@testing-library/user-event";

const quest: Question = {
    id: 7,
    name: "What up?",
    body: "rhymes with bye",
    type: "short_answer_question",
    options: ["sky", "other"],
    expected: "sky",
    points: 10,
    published: false
};

describe("QuestionComponent tests", () => {
    beforeEach(() => {
        render(
            <QuestionComponent
                question={quest}
                questions={[]}
                setQuestions={() => ""}
            ></QuestionComponent>
        );
    });
    test("Does editi switch work", () => {
        let editName = screen.queryByTestId("questName-control");
        let editBody = screen.queryByTestId("questBody-control");
        let editType = screen.queryByTestId("questType-check");
        let editExpected = screen.queryByTestId("questExpected-control");
        let editPoints = screen.queryByTestId("questPoints-control");
        let editPublished = screen.queryByTestId("questPublished-check");
        expect(editName).not.toBeInTheDocument();
        expect(editBody).not.toBeInTheDocument();
        expect(editType).not.toBeInTheDocument();
        expect(editExpected).not.toBeInTheDocument();
        expect(editPoints).not.toBeInTheDocument();
        expect(editPublished).not.toBeInTheDocument();
        const editSwitch = screen.getByTestId("edit-switch");
        editSwitch.click();
        editName = screen.queryByTestId("questName-control");
        editBody = screen.queryByTestId("questBody-control");
        editType = screen.queryByTestId("questType-check");
        editExpected = screen.queryByTestId("questExpected-control");
        editPoints = screen.queryByTestId("questPoints-control");
        editPublished = screen.queryByTestId("questPublished-check");
        expect(editName).toBeInTheDocument();
        expect(editBody).toBeInTheDocument();
        expect(editType).toBeInTheDocument();
        expect(editExpected).toBeInTheDocument();
        expect(editPoints).toBeInTheDocument();
        expect(editPublished).toBeInTheDocument();
    });
    test("Does it tell you when your correct", () => {
        const wrong = screen.getByText("❌");
        expect(wrong).toBeInTheDocument();
        const freeResponse = screen.getByRole("textbox");
        userEvent.type(freeResponse, "sky");
        const right = screen.getByText("✔️");
        expect(right).toBeInTheDocument();
    });
    test("Is the question name shown", () => {
        const name = screen.getByText("What up?");
        expect(name).toBeInTheDocument();
    });
    /*
    test("Is the quesiton body shown", () => {
        const body = screen.getByText("rhymes with bye");
        expect(body).toBeInTheDocument();
    });
    test("Are the question points shown", () => {
        const points = screen.getByText("10");
        expect(points).toBeInTheDocument();
    });
    */
    test("Is the clear button working", () => {
        const freeResponse = screen.getByRole("textbox");
        const clearButton = screen.getByTestId("clear-button");
        userEvent.type(freeResponse, "answer");
        clearButton.click();
    });
});
