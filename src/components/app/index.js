import React, {Component} from 'react'

import AppHeader from './../AppHeader/'
import TodoList from './../TodoList/'
import SearchPanel from './../SearchPanel/'
import ItemStatusFilter from './../ItemStatusFilter/'
import ItemAddForm from './../ItemAddForm'

import './style.css'

export default class App extends Component {


    state = {
        todoData: [
            this.createTodoItem("Create toDo list "),
            this.createTodoItem("have rest  "),
            this.createTodoItem("Do yoga  "),
        ],
        term: '',
        filter: 'all'
    }

    createTodoItem(label) {

        return {
            label,
            important: false,
            done: false,
            id: Math.random().toString().replace('0.', '').slice(0, 10)
        }

    }


    onDeleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id)

            const items = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];
            console.log('del ', idx, id, items, this.state, todoData);

            return {todoData: items}

        })
    }

    onAddItem = (text) => {
        console.log("add text ", text);
        if(text.length === 0) return false
        const newItem = this.createTodoItem(text)

        this.setState(({todoData}) => {
            const newArr = [
                ...todoData,
                newItem
            ]
            return {todoData: newArr}
        })
    }

    onToggleProperty = (arr, id, propName) => {

        const idx = arr.findIndex((el) => el.id === id)

        const oldItem = arr[idx]

        const newItem = {
            ...oldItem,
            [propName]: !oldItem[propName]
        }
        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];


    }

    onToggleDone = (id) => {

        this.setState(({todoData}) => {
            return {todoData: this.onToggleProperty(todoData, id, 'done')}
        })

    }

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {todoData: this.onToggleProperty(todoData, id, 'important')}
        })
    }

    search(items, term) {
        if (term.length === 0) return items

        return items.filter((item) => {
            return item.label
                .toLowerCase().indexOf(term.toLowerCase()) > -1
        })
    }

    onSearchChange = (term) => {
        this.setState({term})
    }

    onFilterChange = (filter) => {
        this.setState({filter})
    }

    filter(items, filter) {
        switch (filter) {
            case 'all':
                return items
            case 'active':
                return items.filter((item) => !item.done)
            case 'done':
                return items.filter((item) => item.done)
            default:
                return items
        }
    }


    render() {
        const {todoData, term, filter} = this.state


        const visibleItems = this.filter(this.search(todoData, term), filter)

        const doneCounter = todoData.filter((el) => el.done).length
        const todoCounter = todoData.length - doneCounter
        return (
            <div className="app container">
                <AppHeader toDo={todoCounter} done={doneCounter}/>
                <div className="row ">
                    <div className="col s6">
                        <SearchPanel
                            onSearchChange={this.onSearchChange}/>
                    </div>
                    <div className="col s6">
                        <ItemStatusFilter
                            filter={filter}
                            onFilterChange={this.onFilterChange}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <ItemAddForm
                            onAddItem={this.onAddItem}
                        />
                    </div>
                </div>
                <TodoList
                    todos={visibleItems}
                    onDelete={this.onDeleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />

            </div>
        )
    }
}

