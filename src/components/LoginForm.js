import React from 'react'
import LoginMessage from './LoginMessage'

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state =  {
            username: '',
            password: '',
            serverResponse: null,
        }
    }

    render() {
        return (
            <div>
                <form>
                    <label>
                        Username:
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={(event) => {
                                this._updateField('username', event.target.value)
                            }}
                        />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input
                            type="text"
                            value={this.state.password}
                            onChange={(event) => {
                                this._updateField('password', event.target.value)
                            }}
                        />
                    </label>
                    <br />
                    <input
                        type="submit"
                        onClick={(event) => {
                            this._submitForm(event)
                        }}
                    />
                </form>
                <LoginMessage {...this.state.serverResponse}
                />
            </div>
        )
    }

    _updateField = (field, val) => {
        this.setState({
            [field]: val,
            serverResponse: null
        }, () => {
            console.log(`${field} is now ${val}`)
            console.log(this)
        })
    }

    _submitForm = (event) => {
        event.preventDefault();
        const serverResponse = this.props.handleSubmit(this.state.username, this.state.password)
        this.setState({
            serverResponse
        }, () => {
            console.log(serverResponse)
        })
    }
}

export default LoginForm