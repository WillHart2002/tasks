import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>

            <h1>This is my Apex Legends character personality tier list</h1>
            <img
                src="https://cdn.charlieintel.com/wp-content/uploads/2020/12/29135306/apex-legends-5.jpg"
                width="260"
                alt="Apex Legends Roster "
            />
            <Container>
                <Row>
                    <Col>
                        <div className="red-box">
                            <ol>
                                <li> Pathfinder </li>
                                <li> Gibraltar </li>
                                <li> Fuse </li>
                                <li> Revenant </li>
                                <li> Mirage </li>
                                <li> Loba </li>
                                <li> Lifeline </li>
                                <li> Horizon </li>
                                <li> Caustic </li>
                                <li> Bloodhound </li>
                                <li> Ash </li>
                                <li> Crypto </li>
                                <li> Octane </li>
                                <li> Mad Maggie </li>
                                <li> Rampart </li>
                                <li> Wattson </li>
                                <li> Seer </li>
                                <li> Wraith </li>
                                <li> Bangalore </li>
                                <li> Valkyrie </li>
                            </ol>
                        </div>
                    </Col>
                    <Col>
                        <div className="red-box">
                            <p> Red Rectangle </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Button onClick={() => console.log("Hello World!")}>
                {" "}
                Log Hello World{" "}
            </Button>
          <p> William Hart </p>
        </div>
    );
}

export default App;
