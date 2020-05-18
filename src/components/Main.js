import React from 'react';
import TodoItem from './TodoItem';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            currentTask: {
                text: '',
                key: '',
                completed: false
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.addTask = this.addTask.bind(this)
        this.handleCompleted = this.handleCompleted.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
        this.setUpdate = this.setUpdate.bind(this)
    }

    handleChange(e) {
        this.setState({
            currentTask: {
                text: e.target.value,
                key: Date.now(),
                completed: false
            }
        });
    }

    addTask(e) {
        e.preventDefault();
        const newTask = this.state.currentTask;
        if(newTask.text !== "") {
            const newTasks = [...this.state.tasks, newTask];
            this.setState( {
                tasks: newTasks,
                currentTask: {
                    text: '',
                    key: '',
                    completed: false
                }
            })
        }
    }

    handleCompleted (key) {
        this.setState( prevState => {
            const updatedTasks = this.state.tasks.map( item => {
                if (item.key === key){
                    item.completed = !item.completed
                }
                return item
            })
            return {
                tasks: updatedTasks
            }
        })
    }
    
    deleteTask (key) {
        const filteredTasks = this.state.tasks.filter( item => item.key !== key);
        this.setState( {
            tasks: filteredTasks
        })
    }

    setUpdate(text, key) {
        const tasks = this.state.tasks;
        tasks.map( item => {
            if(item.key === key){
                item.text = text;
            }
        })
        this.setState( {
            tasks: tasks
        })
    }
    render() {
        const tasksUpdate = this.state.tasks.map( item => <TodoItem key={item.key} task={item} handleChange={this.handleCompleted} deleteTask={this.deleteTask} setUpdate={this.setUpdate}/>)
        return (
            <div className="container h-100" id="MainBox">
                <form onSubmit={this.addTask}>
                    <div className="form-inline">
                        <div className="form-group mx-sm-3 mb-2" >
                            <input type="text" placeholder="Enter a task" className="form-control" size="50" value={this.state.currentTask.text} onChange={this.handleChange}/>
                        </div>
                        <button type = "submit" className="btn btn-dark mb-2" > Add </button>
                        
                    </div>
                    
                </form>
                {tasksUpdate}
            </div>
        );
    }
}

export default Main;