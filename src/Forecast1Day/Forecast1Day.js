import React, { Component } from 'react';

import './Forcast1Day.css';
export default class Forecast1Day extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showAnimation: false,
        }

    }


    handleBoxToggle(e) {
        this.props.onAddAnimaion()

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



    render() {
        return (
            <div className={this.props.className}>
                <p className="day-name">{this.changeToDay(this.props.day)}</p>
                <img src={require('../icons/' + this.props.icon + ".png")} alt="" />
                <p className="temp"> <span className="degrees" >{this.props.temperature}&#176;</span><span className="description">{this.props.description}</span></p>

            </div>
        );
    }
}
