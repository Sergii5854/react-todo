import React, {Component} from 'react'
// import './style.css'

export default class ItemStatusFilter extends Component {

    render() {

        return (
            <div>
                <button className="btn waves-effect waves-light" type="button" name="action">All
                    <i className="material-icons right">cloud</i>
                </button>

                <button className="btn waves-effect waves-light" type="button" name="action">Active
                    <i className="material-icons right">notifications_active
                    </i>
                </button>

                <button className="btn waves-effect waves-light" type="button" name="action">Done
                    <i className="material-icons right">cloud_done</i>
                </button>

            </div>

        )

    }
}
