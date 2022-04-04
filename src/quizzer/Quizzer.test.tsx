import React from "react";
import { render, screen } from "@testing-library/react";
import { Quizzer } from "./Quizzer";
import { Question } from "../interfaces/myQuestion";
import { QuizInterface } from "../interfaces/quiz_int";
import userEvent from "@testing-library/user-event";

const quest: Question = {
    id: 7,
    name: "What's up?",
    body: "rhymes with bye",
    type: "short_answer_question",
    options: ["sky", "other"],
    expected: "sky",
    points: 10,
    published: false
};
const quest2: Question = {
    id: 8,
    name: "What's down?",
    body: "rhymes with sound",
    type: "multiple_choice_question",
    options: ["ground", "pound", "hound", "loud"],
    expected: "ground",
    points: 10,
    published: false
};
const quest3: Question = {
    id: 9,
    name: "What's around?",
    body: "A little dark",
    type: "multiple_choice_question",
    options: ["reality", "trees", "people", "air"],
    expected: "reality",
    points: 10,
    published: false
};
const questArray: Question[] = [quest, quest2, quest3];
const quizio: QuizInterface = {
    name: "Quiz-1",
    description: "bigtime",
    points: 30,
    questions: questArray,
    quizId: 5
};
const quizioArray: QuizInterface[] = [quizio];

describe("Quizzer Tests", () => {
    beforeEach(() => {
        render(<Quizzer quizList={quizioArray} />);
    });
    test("The Quizzer renders", () => {
        const quizzer = screen.getByText("Quizzer");
        expect(quizzer).toBeInTheDocument();
    });
    test("only one quiz rendered", () => {
        const quizComponent = screen.queryAllByTestId("div-quiz");
        expect(quizComponent.length).toBe(1);
    });
    test("A quiz name is shown", () => {
        const name = screen.getByText("Quiz-1");
        expect(name).toBeInTheDocument();
    });
    test("A quiz description is shown", () => {
        const des = screen.getByText("bigtime");
        expect(des).toBeInTheDocument();
    });
    test("The amount of questions for a quiz is visible", () => {
        const questAmt = screen.getByText("3");
        expect(questAmt).toBeInTheDocument();
    });
    test("Add enter/exit quiz button exists and works", () => {
        let enterQuiz = screen.getByTestId("enter-button");
        expect(enterQuiz).toBeInTheDocument();
        //expect(exitQuiz).not.toBeInTheDocument();
        enterQuiz.click();
        const questName = screen.queryByText("What's down?");
        const exitQuiz = screen.getByTestId("exit-button");
        expect(questName).toBeInTheDocument();
        expect(enterQuiz).not.toBeInTheDocument();
        expect(exitQuiz).toBeInTheDocument();
        exitQuiz.click();
        enterQuiz = screen.getByTestId("enter-button");
        expect(enterQuiz).toBeInTheDocument();
        expect(exitQuiz).not.toBeInTheDocument();
    });
    test("The delete button exists and works", () => {
        const deleteQuiz = screen.getByTestId("delete-quiz-button");
        expect(deleteQuiz).toBeInTheDocument();
        deleteQuiz.click();
        const name = screen.queryByText("Quiz-1");
        expect(name).not.toBeInTheDocument();
    });
    test("The add quiz button exists and works", () => {
        const addQuiz = screen.getByTestId("add-quiz-button");
        expect(addQuiz).toBeInTheDocument();
        addQuiz.click();
        const blankName = screen.queryByText("Empty Quiz Name");
        expect(blankName).toBeInTheDocument();
    });
    test("Does the filter published switch exist and work", () => {
        const enterQuiz = screen.getByTestId("enter-button");
        enterQuiz.click();
        let quizComp = screen.queryAllByTestId("div-question-Component");
        expect(quizComp.length).toBe(3);
        const pubSwitch = screen.getByTestId("quiz-filter-published-check");
        expect(pubSwitch).toBeInTheDocument();
        pubSwitch.click();
        quizComp = screen.queryAllByTestId("div-question-Component");
        expect(quizComp.length).toBe(0);
    });
    test("Does the add question button exist and work", () => {
        const enterQuiz = screen.getByTestId("enter-button");
        enterQuiz.click();
        const addQuest = screen.getByTestId("add-question-button");
        expect(addQuest).toBeInTheDocument();
        addQuest.click();
        const blankQuest = screen.queryByText("Blank Question");
        expect(blankQuest).toBeInTheDocument();
    });
    test("Does the delete button exist and work", () => {
        const enterQuiz = screen.getByTestId("enter-button");
        enterQuiz.click();
        let deleteQuestButtons = screen.queryAllByTestId("delete-quest-button");
        expect(deleteQuestButtons.length).toBe(3);
        const quest1 = screen.queryByText("What's up?");
        const quest2 = screen.queryByText("What's down?");
        const quest3 = screen.queryByText("What's around?");
        expect(quest1).toBeInTheDocument();
        expect(quest2).toBeInTheDocument();
        expect(quest3).toBeInTheDocument();
        deleteQuestButtons = screen.queryAllByTestId("delete-quest-button");
        deleteQuestButtons[0].click();
        expect(quest1).not.toBeInTheDocument();
        expect(quest2).toBeInTheDocument();
        expect(quest3).toBeInTheDocument();
    });
    //Editing test
    test("Does editing question name work", () => {
        const enterQuiz = screen.getByTestId("enter-button");
        enterQuiz.click();
        const editSwitch = screen.getAllByTestId("edit-switch");
        editSwitch[0].click();
        const nameEdit = screen.getAllByRole("textbox");
        userEvent.type(nameEdit[0], "?");
        const saveEdit = screen.getByTestId("save-edit");
        saveEdit.click();
        const newName = screen.getByText("What's up??");
        expect(newName).toBeInTheDocument();
    });
    test("Does editing the points work", () => {
        const enterQuiz = screen.getByTestId("enter-button");
        enterQuiz.click();
        const editSwitch = screen.getAllByTestId("edit-switch");
        editSwitch[0].click();
        const pointTxt = screen.getByTestId("questPoints-control");
        userEvent.type(pointTxt, "7");
        const saveEdit = screen.getByTestId("save-edit");
        saveEdit.click();
        const newPoints = screen.queryByText("107");
        expect(newPoints).toBeInTheDocument();
    });
    test("Does editing the question body work", () => {
        const enterQuiz = screen.getByTestId("enter-button");
        enterQuiz.click();
        const editSwitch = screen.getAllByTestId("edit-switch");
        editSwitch[0].click();
        const bodyBox = screen.getByTestId("questBody-control");
        userEvent.type(bodyBox, "!");
        const saveEdit = screen.getByTestId("save-edit");
        saveEdit.click();
        const newBody = screen.queryByText("rhymes with bye!");
        expect(newBody).toBeInTheDocument();
    });
    test("Does editing question type work", () => {
        const enterQuiz = screen.getByTestId("enter-button");
        enterQuiz.click();
        const editSwitch = screen.getAllByTestId("edit-switch");
        editSwitch[1].click();
        const typeSwitch = screen.getByTestId("questType-check");
        typeSwitch.click();
        const saveEdit = screen.getByTestId("save-edit");
        saveEdit.click();
        const txtBoxes = screen.getAllByRole("textbox");
        expect(txtBoxes.length).toBe(2);
    });
    test("Does editing options work", () => {
        const enterQuiz = screen.getByTestId("enter-button");
        enterQuiz.click();
        const editSwitch = screen.getAllByTestId("edit-switch");
        editSwitch[1].click();
        const optionsBox = screen.getByTestId("questOptions-control");
        userEvent.type(optionsBox, "-f");
        const saveEdit = screen.getByTestId("save-edit");
        saveEdit.click();
        const options = screen.getAllByTestId("dropDown");
        options[0].click();
        const newOp = screen.getByText("f");
        expect(newOp).toBeInTheDocument();
    });
    test("Does editing expected work", () => {
        const enterQuiz = screen.getByTestId("enter-button");
        enterQuiz.click();
        const editSwitch = screen.getAllByTestId("edit-switch");
        editSwitch[0].click();
        const txtBoxes = screen.getAllByRole("textbox");
        userEvent.type(txtBoxes[3], "!");
        const saveEdit = screen.getByTestId("save-edit");
        saveEdit.click();
        const ansBox = screen.getAllByRole("textbox");
        userEvent.type(ansBox[0], "sky!");
        //const right = screen.getByText("✔️");
        //expect(right).not.toBeInTheDocument();
    });
    test("Does editing published work", () => {
        const enterQuiz = screen.getByTestId("enter-button");
        enterQuiz.click();
        const editSwitch = screen.getAllByTestId("edit-switch");
        editSwitch[0].click();
        const publishSwitch = screen.getByTestId("questPublished-check");
        publishSwitch.click();
        const saveEdit = screen.getByTestId("save-edit");
        saveEdit.click();
        const pubSwitch = screen.getByTestId("quiz-filter-published-check");
        pubSwitch.click();
        const questComp = screen.getAllByTestId("div-question-Component");
        expect(questComp.length).toBe(1);
    });
    //edit expected (checkmark)
    //
    /*
    test("", () => {
        const enterQuiz = screen.getByTestId("enter-button");
        enterQuiz.click();
        const editSwitch = screen.getAllByTestId("edit-switch");
        editSwitch[0].click();
        //
        const saveEdit = screen.getByTestId("save-edit");
        saveEdit.click();
    });
    */
});
/*
describe("Sketch test", () => {
    beforeEach(() => {
        render(<Quizzer />);
    });
    test("The sketch renders", () => {
        const isImg = screen.getAllByAltText("Should be a picture here");
        expect(isImg).toEqual("Should be a picture here");
    });
});
*/
