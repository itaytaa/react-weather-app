import React from 'react';
import './App.css';
import Forecast1Day from './Forecast1Day/Forecast1Day';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            forecast: []
        }
    }

    componentDidMount() {
        fetch('https://netcraft2.s3-eu-west-1.amazonaws.com/weather.json')
            .then(res => res.json())
            .then((days) => {
                console.log(days)
                this.setState({ forecast: days })
            })
    }
    


    render() {
        // let background= "yellow",
        return (
            <div className="App" style={{background:"lightblue"}}>
                {this.state.forecast.map((day,index)=> {
                    return <Forecast1Day key={index} day={day.day} temperature={day.temperature} description={day.description} icon={day.icon} />
                })}
               
            </div>
        );
    }

}

export default App;
