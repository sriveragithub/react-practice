import React from 'react'
import logo from './logo.svg';
import './App.css';

import Greeter from './components/Greeter'
import Counter from './components/Counter'
import Translator from './components/Translator'
import LoginForm from './components/LoginForm'
import JokeApp from './components/JokeApp'

const nameArray = [
  "Geri",
  "Victoria",
  "Skyler"
];

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      credentials: {
        huxley: {
          password: 's3kr3t',
        }
      }
    }
  }
  
  render () {
    return (
      <div className="App">
        <JokeApp initialTitle="Job Title" initialDesc="Job description"/>

        <LoginForm handleSubmit={this._checkCredentials} />

        <h1 className="greeting">Hello React!</h1>
        {
          nameArray.map(n => (
          <Greeter key={n} name={n} />
          ))
        }
        <Counter initalCount={42} />
        <Counter initalCount={-32} />
        <Counter />
        <Translator initialText="salutations" />
      </div>
    )
  }

  _checkCredentials = (username, password) => {
    console.log(`Checking credentials...`)
    const userObj = this.state.credentials[username]
    if (userObj && (userObj.password === password)) {
      return {
        isValid: true,
        message: 'Login successful'
      }
    } else {
      return {
        isValid: false,
        message: 'Bad username or password'
      }
    }
  }
}

export default App;
