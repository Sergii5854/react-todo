import React from 'react'

import TodoListItem from '../TodoListItem/index'
import './style.css'


const TodoList = ({ todos, onDeleted }) => {

    const elements = todos.map( (item, index) => {

        const { id, ...itemsProps} = item

        return (
            <li
                className="collection-item"
                key={ id }>
                <TodoListItem
                    { ...itemsProps }
                    onDeleted={ ()=> onDeleted(id) }
/*
                     spread operator {...item}
                   */
                    /*
                    default
                    label={item.label}
                    important={item.important}
                */
                />
            </li>
        )
    })
    return (
        <ul className="collection">
            {elements}

        </ul>
    )
}

export default TodoList