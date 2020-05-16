import React from "react"

import TodoItem from "./TodoItem"
import todosData from "./todosData"

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
    }

    render() {
        const todosComponent = this.state.todos.map(item => <TodoItem key={item.id} task={item}/>)
        return (
            <div className="todo-list">
                {todosComponent}
            </div>
        )
    }
}

export default Main