import React, {useState, useEffect} from 'react';
import {Jumbotron, Container, Row} from 'react-bootstrap';
import ClickBox from "./components/ClickBox";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [score,setScore] = useState(0);
  const [size,setSize] = useState(100);
  const [divOrder,setDivOrder] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])
  const colors = ["#C0392B","#E74C3C","#9B59B6","#AF7AC5","#5DADE2","#1A5276","#1ABC9C","#73C6B6","#196F3D","#F1C40F","#F9E79F","#F5B041","#E67E22","#D35400","#D35400","#85929E"];
  const [clicked,setClicked] = useState([])
  const shuffle = (array) => array.sort(() => Math.random() - 0.5);

  const handleClick = (index) => {
    console.log(index);
    if(clicked.includes(index)){
      alert("shoot, that one's been picked. try again.");
      setClicked([]);
      setScore(0);
    }
    else{
    clicked.push(index)
    setScore(score + 1);
    }
    let newArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    shuffle(newArray);
    setDivOrder(newArray);
    
    console.log("click")
    console.log(divOrder)
    
  };

  


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
      <Container className="d-flex flex-wrap justify-content-center">
        {/* <div className="flexOrder">
          <div key={divOrder[0]} style={{order: divOrder[0]}}>1</div>
          <div key={divOrder[1]} style={{order: divOrder[1]}}>2</div>
          <div key={divOrder[2]} style={{order: divOrder[2]}}>3</div>
          <div key={divOrder[3]} style={{order: divOrder[3]}}>4</div>
        </div> */}
        <ClickBox size={size} key={divOrder[0]}  clicked={false} color={colors[0]}  order={divOrder[0]}  click={() => handleClick(0)}/>
        <ClickBox size={size} key={divOrder[1]}  clicked={false} color={colors[1]}  order={divOrder[1]}  click={() => handleClick(1)}/>
        <ClickBox size={size} key={divOrder[2]}  clicked={false} color={colors[2]}  order={divOrder[2]}  click={() => handleClick(2)}/>
        <ClickBox size={size} key={divOrder[3]}  clicked={false} color={colors[3]}  order={divOrder[3]}  click={() => handleClick(3)}/>
        <ClickBox size={size} key={divOrder[4]}  clicked={false} color={colors[4]}  order={divOrder[4]}  click={() => handleClick(4)}/>
        <ClickBox size={size} key={divOrder[5]}  clicked={false} color={colors[5]}  order={divOrder[5]}  click={() => handleClick(5)}/>
        <ClickBox size={size} key={divOrder[6]}  clicked={false} color={colors[6]}  order={divOrder[6]}  click={() => handleClick(6)}/>
        <ClickBox size={size} key={divOrder[7]}  clicked={false} color={colors[7]}  order={divOrder[7]}  click={() => handleClick(7)}/>
        <ClickBox size={size} key={divOrder[8]}  clicked={false} color={colors[8]}  order={divOrder[8]}  click={() => handleClick(8)}/>
        <ClickBox size={size} key={divOrder[9]}  clicked={false} color={colors[9]}  order={divOrder[9]}  click={() => handleClick(9)}/>
        <ClickBox size={size} key={divOrder[10]} clicked={false} color={colors[10]} order={divOrder[10]} click={() => handleClick(10)}/>
        <ClickBox size={size} key={divOrder[11]} clicked={false} color={colors[11]} order={divOrder[11]} click={() => handleClick(11)}/>
        <ClickBox size={size} key={divOrder[12]} clicked={false} color={colors[12]} order={divOrder[12]} click={() => handleClick(12)}/>
        <ClickBox size={size} key={divOrder[13]} clicked={false} color={colors[13]} order={divOrder[13]} click={() => handleClick(13)}/>
        <ClickBox size={size} key={divOrder[14]} clicked={false} color={colors[14]} order={divOrder[14]} click={() => handleClick(14)}/>
        <ClickBox size={size} key={divOrder[15]} clicked={false} color={colors[15]} order={divOrder[15]} click={() => handleClick(15)}/>
      </Container>
    </div>
  );
}

export default App;
