import React from 'react'

import TodoListItem from './TodoListItem'


const TodoList = ({todos}) => {

    const elements = todos.map( (item, index) => {
        return (
            <li key={ item.id }>
                <TodoListItem
                    { ...item }
/*
                     spread operator
                    label={item.label}
                    important={item.important}
                    */
                />
            </li>
        )
    })
    return (
        <ul>
            {elements}

        </ul>
    )
}

export default TodoList