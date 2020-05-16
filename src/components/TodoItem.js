import React from "react"

function TodoItem(props) {
    const completedStyle = {
        fontStyle: "italic",
        color: "#cccccc",
        textDecoration: "line-through"
    }

    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.task.completed} onChange={() => props.handleChange(props.task.id)}/>
            <span style={props.task.completed ? completedStyle : null}>{props.task.text}</span>
        </div>
    )
}

export default TodoItem