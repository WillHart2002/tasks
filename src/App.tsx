import React from "react";
import "./App.css";
import { ShowHideTasks } from "./components/ShowHideTasks";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <ShowHideTasks></ShowHideTasks>
        </div>
    );
}

export default App;
