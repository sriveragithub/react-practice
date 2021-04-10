import React from 'react'
import rot13 from 'rot-thirteen'

class Translator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: this.initialText || '',
            translated: rot13(props.initialText) || ''
        }
    }
    
    render() {
        return (
            <div>
                <h1>Translator</h1>
                <input type="text" onChange={(event) => {
                    console.log(event.target.value)
                    this._updateText(event.target.value)
                }}/>
                <p>{this.state.text}</p>
                <p>{this.state.translated}</p>
            </div>
        )
    }

    _updateText = (newText) => {
        this.setState({
            text: newText,
            translated: rot13(newText)
        }, () => {
            console.log(`Text updated to: ${newText}`)
        })
    }
}

export default Translator