/** QuestionType influences how a question is asked and what kinds of answers are possible */
export type QuestionType = "multiple_choice_question" | "short_answer_question";

/** A representation of a Question in a quizzing application */
export interface Question {
    /** A unique identifier for the question */
    id: number;
    /** The human-friendly title of the question */
    name: string;
    /** The instructions and content of the Question */
    body: string;
    /** The kind of Question; influences how the user answers and what options are displayed */
    type: string; //QuestionType;
    /** The possible answers for a Question (for Multiple Choice questions) */
    options: string[];
    /** The actually correct answer expected */
    expected: string;
    /** How many points this question is worth, roughly indicating its importance and difficulty */
    points: number;
    /** Whether or not this question is ready to display to students */
    published: boolean;
    //Whether the question is answered right or wrong
    //correctPoints: number;
}

export const spongeQuest1 = {
    id: 101,
    name: "What is the name of Spongebobs pet?",
    body: "it rhymes with Harry",
    type: "multiple_choice_question",
    options: ["sparry", "lary", "gary"],
    expected: "gary",
    points: 5,
    published: false
    //correctPoints: 0
};

export const spongeQuest2 = {
    id: 102,
    name: "What is the color of Spongebobs tie?",
    body: "like a clowns nose",
    type: "short_answer_question",
    options: [],
    expected: "red",
    points: 5,
    published: false
    //correctPoints: 0
};
