import React, {Component} from 'react'
// import './style.css'

export default class ItemAddForm extends Component {

    render() {

        return (
            <form>
                <input type="text" placeholder="type add new todo"/>
                <button type="submit"
                        className="btn-floating  waves-effect waves-light green"
                onClick={ () => this.props.onAddItem('hello world')}>ADD</button>

            </form>

        )

    }
}
