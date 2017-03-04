import React, {Component} from 'react';

class OnlineTimer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0
        }
        this.timeCounter = new Date ();
        this.timeDifference = 0;
        this.tick = this.tick.bind(this);
        this.colors = {
          brightBlue: '#4ABDAC',
        }
        this.styles = {
            container: {
                textAlign: 'center',
                background: 'black',
                borderRadius: '10px',
                overflow: 'auto',
                marginTop: '10px',
            },
            header: {
              color:'white',
              marginTop: '10px',
            },
            counter: {
              color: 'white',

            }
        }
    }
    render() {
        return (
            <div style = {this.styles.container}>
                <h5 style = {this.styles.header}>Seconds Since entering this page
                </h5>
                <h6 style = {this.styles.counter}>{this.state.time}</h6>
            </div>
        );
    }
    componentWillMount() {
        this.timeCounter = new Date()
        this.intervalID = window.setInterval(this.tick,100);
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick() {
        this.timeDifference = this.timeDifference +((new Date()) - this.timeCounter)
        this.timeCounter = (new Date ());
        this.setState({
            time: (this.timeDifference / 1000).toPrecision(2)
        })
    }

}

export default OnlineTimer;
