import React, {Component} from 'react'
import './style.css'

export default class TodoListItem extends Component {
    constructor() {
        super()

    }

    render() {

        const {label , onDelete, onToggleImportant , onToggleDone, important, done} = this.props


        let ClassNamesItem = 'todo-list-item'

        if (done) ClassNamesItem += ' done'
        if (important) ClassNamesItem += ' important';


        return (
            <span className={ClassNamesItem}>
                <span className='todo-list-item-label'
                      onClick={onToggleDone}> {label}
                </span>
                <button
                    type="button"
                    className="todo-list-item-btn red waves-effect waves-light btn"
                    onClick={onDelete}>
                    <i className="material-icons material-hover">delete_forever</i>
                </button>
                <button type="button"
                        className="todo-list-item-btn waves-effect waves-light btn green"
                        onClick={onToggleImportant}
                >
                    <i className="material-icons material-hover">priority_high</i>
                </button>
            </span>

        )

    }
}

