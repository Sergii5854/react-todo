import React from 'react'
import ReactDOM from 'react-dom'

import AppHeader from './components/AppHeader/index'
import TodoList from './components/TodoList/index'
import SearchPanel from './components/SearchPanel/index'

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

