import React from "react";
import MomentTZ from "moment-timezone";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.timer = null;
    this.reRenderCount = 0;
    this.state = {
      currentTime: new Date(),
    };
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        currentTime: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    {
      console.log(this.reRenderCount++);
    }
    return (
      <div className="timer">
        <span>{this.props.city}:=====: </span>
        <span>
          {MomentTZ.tz(this.state.currentTime, this.props.tz).format(
            "HH:mm:ss"
          )}
        </span>
      </div>
    );
  }
}

export default Timer;
