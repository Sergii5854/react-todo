import React from 'react'
import ReactDOM from 'react-dom'

const TodoList = () => {
    return (
        <ul>
            <li>
                Create todo list
            </li>
        </ul>
    )
}

const AppHeader = () => {
    return <h1> Todo List </h1>
}

const SearchPanel  = () => {
    return <input type="text" placeholder="search "/>
}

const el = (
    <div>
        <AppHeader/>
        <SearchPanel/>
        <TodoList/>

    </div>
)

ReactDOM.render(el,
    document.getElementById('root'))

