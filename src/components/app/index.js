import React from 'react'

import AppHeader from './../AppHeader/'
import TodoList from './../TodoList/'
import SearchPanel from './../SearchPanel/'
import ItemStatusFilter from './../ItemStatusFilter/'

import todoData from './../../todoData'


const App = () => {

    return (
        <div>
            <AppHeader/>
            <SearchPanel/>
            <ItemStatusFilter/>
            <TodoList
                todos={todoData}
                onDeleted={ (id) => console.log(id)}
            />

        </div>
    )
}

export default App;