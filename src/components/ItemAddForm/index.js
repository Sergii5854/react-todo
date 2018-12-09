import React, {Component} from 'react'
// import './style.css'

export default class ItemAddForm extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render() {

        return (
            <div>
                <input type="text" placeholder="type add new todo"/>
                <button type="button"
                        className="btn-floating  waves-effect waves-light green"
                onClick={ () => this.props.onAddItem('hello world')}
                >ADD
                </button>

            </div>

        )

    }
}
