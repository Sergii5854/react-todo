import React, {Component} from 'react'
// import './style.css'

export default class ItemStatusFilter extends Component {

    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'},
    ]

    render() {
        const {filter, onFilterChange} = this.props

        const buttons = this.buttons.map(({name, label}) => {

            const isActive = filter === name
            const clazz = isActive ? 'blue' : ''

            return (
                <button type="button"
                        className={`btn waves-effect waves-light m5 ${clazz}`}
                        name={name}
                        key={name}
                        onClick={() => onFilterChange(name)}
                >
                    {label}
                </button>
            )
        })


        return (
            <div>
                {buttons}
            </div>

        )

    }
}
