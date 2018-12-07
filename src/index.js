import React from 'react'
import ReactDOM from 'react-dom'

import AppHeader from './components/AppHeader'
import TodoList from './components/TodoList'
import SearchPanel from './components/SearchPanel'

import todoData from './todoData'


const App = () => {

    return (
        <div>
            <AppHeader/>
            <SearchPanel/>
            <TodoList todos={todoData} />

        </div>
    )
}


ReactDOM.render(<App/>,
    document.getElementById('root'))

