import "./App.css";
import React from "react";
import { Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ghUser: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.children[0].value);
  };

  handleChange = (e) => {
    this.setState(
      {
        ghUser: e.target.value,
      },
      () => {
        console.log(this.state.ghUser);
      }
    );
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="ghUser"
            id="ghUser"
            placeholder="Enter a GitHub Username"
            className="inputGHUser"
            onChange={this.handleChange}
          />
          <Link to={`/users/${this.state.ghUser}`}>Submit</Link>
        </form>
      </div>
    );
  }
}

export default App;
