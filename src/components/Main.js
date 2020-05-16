import React from "react"

import TodoItem from "./TodoItem"
import todosData from "./todosData"

function Main() {
    const todosComponent = todosData.map(item => <TodoItem key={item.id} task={item}/>)
    return (
        <div className="todo-list">
            {todosComponent}
        </div>
    )
}

export default Main