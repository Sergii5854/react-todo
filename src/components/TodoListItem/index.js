import React from 'react'
import './style.css'

const TodoListItem = ({label, important = false}) => {

    const styleItem = {
        color: important ? 'tomato' : 'black'
    }

    return <span style={styleItem}> {label}
        <i className="material-icons material-hover">delete_forever</i>
        <i className="material-icons material-hover">priority_high</i>
    </span>
}

export default TodoListItem