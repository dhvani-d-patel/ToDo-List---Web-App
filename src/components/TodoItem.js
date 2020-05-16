import React from "react"

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.task.completed}/>
            <span>{props.task.text}</span>
        </div>
    )
}

export default TodoItem