import React from 'react'

class JokeApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: props.initialTitle || '',
            description: props.initialDesc ||  '',
            isLoading: false
        }
    }

    render() {
        return (
            <div>
                <button onClick={this._fetchJob}>Pull Job</button>
                <h1>{this.state.isLoading ? `Loading...` : this.state.title}</h1>
                {this.state.isLoading ? `` : this.state.description}
            </div>
        )
    }

    _fetchJob = () => {
        const heroProxy = `https://quiet-scrubland-15309.herokuapp.com/`
        const url = `${heroProxy}https://jobs.github.com/positions.json?description=atlanta`
        this.setState({
            isLoading: true,
        }, () => {
            fetch(url)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    title: data[0].title,
                    description: data[0].description,
                    isLoading: false
                }, () => {
                    console.log(`Data has been displayed...`)
                })
            })
        })
    }
}

export default JokeApp