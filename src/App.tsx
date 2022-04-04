import React from "react";
import "./App.css";
import { ShowHideTasks } from "./components/ShowHideTasks";
import { Quizzer } from "./quizzer/Quizzer";
import { spongeQuiz } from "./interfaces/quiz_int";
import SketchIMG from "./quizzer/Sketch2.jpg";

function App(): JSX.Element {
    const quizzList = [spongeQuiz];
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <ShowHideTasks></ShowHideTasks>
            <Quizzer quizList={quizzList}></Quizzer>
            <hr></hr>
            <h5> Quizzer sketch</h5>
            <img src={SketchIMG} alt="Should be a picture here" />
            <hr></hr>
            <strong> Completed quizzer tasks </strong>
            <ul>
                <li> Sketched app </li>
                <li> Quizzes are visible </li>
                <li> Quizzes have questions </li>
                <li> Short answer and multiple choice </li>
                <li> Check correctness </li>
                <li> Clear answers </li>
                <li> Publish questions </li>
                <li> Filter questions </li>
                <li> Edit questions </li>
                <li> Add questions </li>
                <li> Delete questions </li>
                <li> Reorder questions </li>
                <li> Add quizzes </li>
                <li> Delete quizzes </li>
            </ul>
        </div>
    );
}

export default App;
