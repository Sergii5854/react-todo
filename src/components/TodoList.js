import React from 'react'

import TodoListItem from './TodoListItem'


const TodoList = ({todos}) => {

    const elements = todos.map( (item, index) => {

        const { id, ...itemsProps} = item
        return (
            <li key={ id }>
                <TodoListItem
                    { ...itemsProps }
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