import React, {Component} from 'react'

import AppHeader from './../AppHeader/'
import TodoList from './../TodoList/'
import SearchPanel from './../SearchPanel/'
import ItemStatusFilter from './../ItemStatusFilter/'
import ItemAddForm from './../ItemAddForm'

import todoData from './../../todoData'


export default class App extends Component {
    constructor() {
        super()
        this.state = {
            todoData: [
                {label: "create and think ", important: true, id:1},
                {label: "create todo ", important: false, id:2},
                {label: "Add redux  ", important: false, id:3},
                {label: "style ", important: false, id:4},
            ]
        }



    }
    onDeleteItem = (id) => {
        this.setState( ( {todoData} ) => {
            const idx = todoData.findIndex((el) => el.id === id)

            const items = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];
            console.log('del ',idx , id , items, this.state,todoData);

            return { todoData: items }

        })
    }

    onAddItem =(text) => {
        console.log("add text ", text);
    }



    render() {
        return (
            <div>
                <AppHeader/>
                <SearchPanel/>
                <ItemStatusFilter/>
                <ItemAddForm
                    onAdd={this.onAddItem} />
                <TodoList
                    todos={this.state.todoData}
                    onDelete={this.onDeleteItem}
                />

            </div>
        )
    }
}

