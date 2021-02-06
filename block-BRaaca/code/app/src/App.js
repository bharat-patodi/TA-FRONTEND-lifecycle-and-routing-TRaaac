import "./App.css";
import React from "react";
import data from "./data.json";
import moment from "moment-timezone";
import Timer from "./components/Timer";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timerCount: 3,
    };
  }
  handleClick = (e) => {
    if (e.target.value === "add" && this.state.timerCount < 6) {
      console.log("Add");
      this.setState((prevState) => {
        return {
          timerCount: prevState.timerCount + 1,
        };
      });
    }
    if (e.target.value === "remove" && this.state.timerCount > 0) {
      console.log("Remove");
      this.setState((prevState) => {
        return {
          timerCount: prevState.timerCount - 1,
        };
      });
    }
  };
  render() {
    return (
      <div className="App">
        {data
          .filter((val, i) => val.enabled && i < this.state.timerCount)
          .map((val) => (
            <Timer {...val} key={val.id} />
          ))}
        <section className="actions">
          <button onClick={this.handleClick} value="add">
            +
          </button>
          <button onClick={this.handleClick} value="remove">
            -
          </button>
        </section>
      </div>
    );
  }
}

export default App;
