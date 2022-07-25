import React from 'react';

class Item extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            clicks: 0
        }
    }


    click() {
        // console.log(`My age is now ${this.props.name}, and i can now vote.`)
        this.setState({
            clicks: this.state.clicks + 1
        })
    }

    render() {
        return (
            <>
                <h1>Hello World</h1>
                <h2 onClick={() => this.click()}>My age is {this.props.name} </h2>
                <p>{this.state.clicks} is no. of clicks</p>
            </>
        )
    }
}
export default Item;