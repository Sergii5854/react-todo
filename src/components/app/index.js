import React, {Component} from 'react'

import AppHeader from './../AppHeader/'
import TodoList from './../TodoList/'
import SearchPanel from './../SearchPanel/'
import ItemStatusFilter from './../ItemStatusFilter/'
import ItemAddForm from './../ItemAddForm'


export default class App extends Component {


     state = {
            todoData: [
                this.createTodoItem("create and think "),
                this.createTodoItem("Add redux "),
            ]
        }

    createTodoItem(label) {

        return {
            label,
            important: false,
            done: false,
            id: Math.random( ).toString().replace('0.','').slice(0, 10)
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
        const newItem = this.createTodoItem(text)

        this.setState(({todoData}) => {
            const newArr = [
                ...todoData,
                newItem
            ]
            return {todoData: newArr}
        })
    }

    onToggleDone = (id) => {

        console.log(this.state.todoData);
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id)

            const oldItem = todoData[idx]

            const newItem = {
                ...oldItem,
                done: !oldItem.done
            }
            const newArr = [
                ...todoData.slice(0, idx),
                newItem,
                ...todoData.slice(idx + 1)
            ];
            console.log("done id", newArr);
            return {todoData: newArr}

        })

    }

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id)

            const oldItem = todoData[idx]

            const newItem = {
                ...oldItem,
                done: !oldItem.done
            }
            const newArr = [
                ...todoData.slice(0, idx),
                newItem,
                ...todoData.slice(idx + 1)
            ];
            console.log("done id", newArr);
            return {todoData: newArr}

        })
    }


    render() {
        const maxID = 1000;

        const doneCounter = this.state.todoData.filter( (el) => el.done).length
        const todoCounter = this.state.todoData.length - doneCounter
        return (
            <div>
                <AppHeader toDo={todoCounter} done={doneCounter}/>
                <SearchPanel/>
                <ItemStatusFilter/>
                <ItemAddForm
                    onAddItem={this.onAddItem}/>
                <TodoList
                    todos={this.state.todoData}
                    onDelete={this.onDeleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />

            </div>
        )
    }
}

