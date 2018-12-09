import React from 'react'

import TodoListItem from '../TodoListItem/index'
import './style.css'


const TodoList = ({ todos , onDelete,
                      onToggleImportant ,
                      onToggleDone}) => {

    const elements = todos.map( (item, index) => {

        const { id, ...itemsProps} = item

        return (
            <li
                className="collection-item"
                key={ id }>
                <TodoListItem
                    { ...itemsProps }
                    onDelete={ ()=> onDelete(id) }
                    onToggleImportant={ ()=> onToggleImportant(id) }
                    onToggleDone={ ()=> onToggleDone(id) }

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