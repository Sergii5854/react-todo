import React, {Component} from 'react'


export default class SearchPanel extends Component {
    constructor(){
        super()
        this.state={
            term:''

        }
    }
    onTermChange = (e) => {
        const {onSearchChange = () => {}} = this.props;
        this.setState({
            term: e.target.value
        });

        onSearchChange(e.target.value);
    };

    render() {
        return(
            <input
                value={this.state.term}
                onChange={this.onTermChange}
                type="text"
                placeholder="search "/>
        )
    }
}

