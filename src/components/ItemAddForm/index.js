import React, {Component} from 'react'
// import './style.css'

export default class ItemAddForm extends Component {
    constructor() {
        super()
        this.state = {
            label: ''

        }
    }

    onLabelChange = (e) => {
        console.log(e.target.value);
        this.setState({
            label: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault()
        this.props.onAddItem(this.state.label)
        this.setState({
            label: ''
        })
    }

    render() {

        return (

            <form
                onSubmit={this.onSubmit}>
                <input type="text"
                       placeholder="Type to Add new toDo"
                       onChange={this.onLabelChange}
                       value={this.state.label}
                       className="col s6"
                />

                <button type="submit"
                        className="  btn waves-effect waves-light col s2 offset-s2"
                >
                    <i className="material-icons">add</i>
                </button>

            </form>

        )

    }
}
