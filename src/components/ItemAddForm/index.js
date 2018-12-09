import React, {Component} from 'react'
// import './style.css'

export default class ItemAddForm extends Component {
    constructor(){
        super()
        this.state = {
            label: ''

        }
    }

    onLabelChange = (e) => {
        console.log(e.target.value);
        this.setState({
            label:e.target.value
        })
    }
    onSubmit = (e) =>{
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
                       placeholder="type add new todo"
                onChange={this.onLabelChange}
                value={this.state.label}
                />
                <button type="submit"
                        className="btn-floating  waves-effect waves-light green"
                >ADD
                </button>

            </form>

        )

    }
}
