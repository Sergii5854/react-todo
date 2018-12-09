import React, {Component} from 'react'
import './style.css'

export default class TodoListItem extends Component {
    constructor() {
        super()
        this.state = {
            done: false,
            important: false
        }

        this.onLabelClick = () => {
            this.setState(({done}) => {
                return {
                    done: !done
                };
            });
            console.log(this.props.label);
        }

        this.onMarkImportant = () => {
            this.setState(({important}) => {
                return {
                    important: !important
                };
            });
        };

    }

    render() {


        const {label , onDelete} = this.props
        const {done, important} = this.state;

        let ClassNamesItem = 'todo-list-item'

        if (done) ClassNamesItem += ' done'
        if (important) ClassNamesItem += ' important';


        return (
            <span className={ClassNamesItem}>
                <span className='todo-list-item-label'
                      onClick={this.onLabelClick}> {label}
                </span>
                <button
                    type="button"
                    className="todo-list-item-btn red waves-effect waves-light btn"
                    onClick={onDelete}>
                    <i className="material-icons material-hover">delete_forever</i>
                </button>
                <button type="button"
                        className="todo-list-item-btn waves-effect waves-light btn green"
                        onClick={this.onMarkImportant}
                >
                    <i className="material-icons material-hover">priority_high</i>
                </button>
            </span>

        )

    }
}

