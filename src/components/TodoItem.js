import React from 'react';

function TodoItem(props) {
    const completedStyle = {
        border: 0,
        backgroundColor: "transparent",
        fontStyle: "italic",
        color: "#cccccc",
        textDecoration: "line-through"
    };
    const notCompletedStyle = {
        border: 0,
        backgroundColor: "transparent",
    };
    return (
        <div className="container">
            <div id="list-item" className="container" key="item.key">
                <input type="checkbox" checked={props.task.completed} onChange={
                    () => props.handleChange(props.task.key) }/>
                <input type="text" id={props.task.key} value={props.task.text} style={props.task.completed ? completedStyle : notCompletedStyle} onChange={ (e) => {
                    props.setUpdate(e.target.value, props.task.key) }} />
                <span style={{position: "absolute", right: "10px"}}> <ion-icon name="close-circle-outline" fontSize="100px" onClick = {
                    () => props.deleteTask(props.task.key)
                }>Icon</ion-icon></span>
            </div>
        </div>
    );
}

export default TodoItem;