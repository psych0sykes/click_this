import React, {useState} from 'react';
import {Jumbotron, Container, Row} from 'react-bootstrap';
import ClickBox from "./components/ClickBox";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [score,setScore] = useState(0)

  return (
    <div>
    <Jumbotron>
        <Row className="justify-content-md-center">
          <h1>click_this</h1>
        </Row>
        <Row className="justify-content-md-center">
          <h3>score: {score}</h3>
        </Row>
      </Jumbotron>
      <Container className="d-flex justify-content-center">
        
      </Container>
    </div>
  );
}

export default App;
