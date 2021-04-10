import React from 'react'
import Output from './Output'
import Increment from './Increment'
import Decrement from './Decrement'

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: props.initialCount || 0
        };
    }

    render() {
        return (
            <div>
                <Decrement handleClick={this._decrementCounter} />
                <Output count={this.state.count} />
                <Increment handleClick={this._incrementCounter} />
            </div>
        )
    }

    _incrementCounter = () => {
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log(`Finished updating the count...`)
        })
    }

    _decrementCounter = () => {
        this.setState({
            count: this.state.count - 1
        }, () => {
            console.log(`Finished updating the count...`)
        })
    }
}

export default Counter