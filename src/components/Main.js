import React from "react"

import TodoItem from "./TodoItem"
import todosData from "./todosData"

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id){
        this.setState( prevState => {
            const updatedTodos = this.state.todos.map(todo =>{
                if(todo.id === id){
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }

    render() {
        const todosComponent = this.state.todos.map(item => <TodoItem key={item.id} task={item} handleChange={this.handleChange}/>)
        return (
            <div className="todo-list">
                {todosComponent}
            </div>
        )
    }
}

export default Main