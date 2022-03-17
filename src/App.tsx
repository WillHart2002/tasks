import React from "react";
import "./App.css";
import { ShowHideTasks } from "./components/ShowHideTasks";
import SketchIMG from "./quizzer/Sketch.jpg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <ShowHideTasks></ShowHideTasks>
            <img src={SketchIMG} alt="Should be a picture here" />
            <ul>
                <li> Sketched app </li>
            </ul>
        </div>
    );
}

export default App;
