import React, {Component} from 'react'
import './style.css'

export default class TodoListItem extends Component {

    render() {

        const {label, onDelete, onToggleImportant, onToggleDone, important, done} = this.props


        let ClassNamesItem = 'todo-list-item row'

        if (done) ClassNamesItem += ' done'
        if (important) ClassNamesItem += ' important';


        return (
            <div className={ClassNamesItem}>
                <div className='col s8 todo-list-item-label '
                      onClick={onToggleDone}
                >
                   <p>
                       {label}
                   </p>
                </div>
                <div className="col s4  button-group ">
                <button
                    type="button"
                    className=" red waves-effect waves-light btn"
                    onClick={onDelete}>
                    <i className="material-icons material-hover">delete_forever</i>
                </button>
                <button type="button"
                        className="waves-effect waves-light btn "
                        onClick={onToggleImportant}
                >
                    <i className="material-icons material-hover">priority_high</i>
                </button>
                    </div>
            </div>

        )

    }
}

