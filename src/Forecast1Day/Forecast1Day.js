import React, { Component } from 'react';
import Sounds1 from '../Sounds/18.mp3';
import Sounds2 from '../Sounds/1.mp3';

import './Forcast1Day.css';
export default class Forecast1Day extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isSoundOn: false
        }

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
            default:

        }
        return day
    }
    changeSound(icon) {
       
        this.setState({ isSoundOn: !this.state.isSoundOn })
        console.log(typeof icon)
        if(icon==="18"){
          
            let audio = new Audio(Sounds1)
            audio.play()
        }
        if(icon==="1"){
       
            let audio = new Audio(Sounds2)
            audio.play()
        }


    }


    render() {

        return (
            <div className={this.props.className} onMouseEnter={this.changeSound.bind(this, this.props.icon)}>
                <p className="day-name">{this.changeToDay(this.props.day)}</p>
                <img src={require('../icons/' + this.props.icon + ".png")} alt="" />
                <p className="temp"> <span className="degrees" >{this.props.temperature}&#176;</span><span className="description">{this.props.description}</span></p>

            </div>
        );
    }
}
