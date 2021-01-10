import React from 'react';
import './App.css';
import Forecast1Day from './Forecast1Day/Forecast1Day';
import Animation from './Animation/Animation';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            forecast: [],
            showAnimation: false
        }
    }

    componentDidMount() {
        fetch('https://netcraft2.s3-eu-west-1.amazonaws.com/weather.json')
            .then(res => res.json())
            .then((days) => {
                this.setState({ forecast: days })
            })
    }

    handleBoxToggle(e) {

        this.setState({ showAnimation: !this.state.showAnimation })

    }

    render() {

        return (
            <div className="App"  >
                <Animation style={{ display: this.state.showAnimation ? "block" : "none" }} />
                <div onMouseEnter={this.handleBoxToggle.bind(this)}
                    onMouseLeave={this.handleBoxToggle.bind(this)}
                    className="weather-days" style={{ background: "lightblue" }}>
                    {this.state.forecast.map((day, index) => {
                        return <Forecast1Day key={index} day={day.day} temperature={day.temperature} description={day.description} icon={day.icon} />
                    })}
                </div>

            </div>







        );
    }

}

export default App;
