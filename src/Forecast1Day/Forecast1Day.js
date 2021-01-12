import React, { Component } from 'react';

import Sounds1 from '../Sounds/1.mp3'
import Sounds18 from '../Sounds/18.mp3'
import Sounds14 from '../Sounds/14.mp3'
import Sounds7 from '../Sounds/7.mp3'
import './Forcast1Day.css';

export default class Forecast1Day extends Component {
    constructor(props) {
        super(props)
        this.state = {
            play: true
        }
        this.audio = null;
    }
    componentDidMount() {
        if (this.props.icon === "18") {
            this.audio = new Audio(Sounds18)
        } else if (this.props.icon === "1") {
            this.audio = new Audio(Sounds1)
        } else if (this.props.icon === "14") {
            this.audio = new Audio(Sounds14)
        } else {
            this.audio = new Audio(Sounds7)
        }
    }


    togglePlay() {
        this.setState({ play: !this.state.play })
        this.state.play ? this.audio.play() : this.audio.pause();

    }


    changeToDay(num) {
        let day;
        switch (num) {
            case 0:
                day = "sunday"
                break;
            case 1:
                day = "Monday"
                break;
            case 2:
                day = "Tuesday"
                break;
            case 3:
                day = "Wednesday"
                break;
            case 4:
                day = "Thursday"
                break;
            case 5:
                day = "Friday"
                break;
            case 6:
                day = "Saturday"
                break;
            default:
        }
        return day
    }



    render() {
        return (
            <div className={this.props.className}
                onMouseLeave={this.togglePlay.bind(this)}
                onMouseEnter={this.togglePlay.bind(this)} >
                <p className="day-name">{this.changeToDay(this.props.day)}</p>
                <img src={require('../icons/' + this.props.icon + ".png")} alt="" />
                <p className="temp"> <span className="degrees">{this.props.temperature}&#176;</span>
                    <span className="description">{this.props.description}</span></p>

            </div>
        );
    }
}
