import React, {Component} from 'react';

class OnlineTimer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0
        }
        this.tick = this.tick.bind(this);
    }
    render() {
        return (
            <div>
                {this.state.time}
            </div>
        );
    }
    componentWillMount() {
        this.intervalID = window.setInterval(this.tick, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick() {
        this.setState((prevState) => ({
            time: prevState.time + 1
        }));

    }

}

export default OnlineTimer;
