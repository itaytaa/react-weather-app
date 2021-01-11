import React, { Component } from 'react';
import './Animation.css'

export default class Animation extends Component {

    render() {

        return (
            <div  className="animation" style={this.props.style}>
                <div className="cloud-1">
                    <div className="cloud-base">
                        <div className="upper-cloud"></div>
                        <div className="upper-cloud-2"></div>
                        <div className="lower-cloud"></div>
                        <div className="lower-cloud-2"></div>
                        <div className="lower-cloud-3"></div>

                    </div>
                </div>
                <div className="cloud-2">
                    <div className="cloud-base">
                        <div className="upper-cloud"></div>
                        <div className="upper-cloud-2"></div>
                        <div className="lower-cloud"></div>
                        <div className="lower-cloud-2"></div>
                        <div className="lower-cloud-3"></div>

                    </div>
                </div>

                <div className="cloud-3">
                    <div className="cloud-base">
                        <div className="upper-cloud"></div>
                        <div className="upper-cloud-2"></div>
                        <div className="lower-cloud"></div>
                        <div className="lower-cloud-2"></div>
                        <div className="lower-cloud-3"></div>

                    </div>
                </div>
            </div>
        );
    }
}
