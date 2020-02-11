import React from 'react';

function ClickBox(props) {
    return(
        <div style={{backgroundColor: props.color, width: props.size, height: props.size}}/>
    )
}

export default ClickBox