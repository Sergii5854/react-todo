import React from 'react'

import TodoListItem from '../TodoListItem/index'
import './style.css'


const TodoList = ({ todos }) => {

    const elements = todos.map( (item, index) => {

        const { id, ...itemsProps} = item

        return (
            <li
                className="collection-item"
                key={ id }>
                <TodoListItem
                    { ...itemsProps }
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