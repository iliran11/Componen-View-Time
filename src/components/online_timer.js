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
              padding:'5px',
            },
            counter: {
              color: 'white',
              padding:'5px',

            }
        }
    }
    render() {
        if (this.props.display) {
          this.styles.container.display = 'block';
        } else {
          this.styles.container.display = 'none';
        }
        return (
            <div style = {this.styles.container}>
                <h2 style = {this.styles.header}>Visit Time Counter</h2>
                <h3 style = {this.styles.counter}>{this.state.time}</h3>
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
            time: (this.timeDifference / 1000).toFixed(2)
        })
    }

}

export default OnlineTimer;
