import React from 'react';
import "./style.css";

function ClickBox(props) {

    const handleClick = () => console.log("click");

    return(
        <div className="clickBox" onClick={props.click} style={{backgroundColor: props.color, width: props.size, height: props.size, order: props.order}}/>
    )
}

export default ClickBox