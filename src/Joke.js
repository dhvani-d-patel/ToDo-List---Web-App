import React from "react"

function Joke(props) {
    return (
        <div>
            <h3 style={{display: !props.question && "none"}}>Question: {props.question}</h3>
            <h3 style={{color: !props.question && "gray"}}>Answer: {props.answer}</h3>
            <hr></hr>
        </div>
    )
}

export default Joke;