import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      isLoading: false,
      currentProp: "",
      currentValue: "",
    };
  }
  componentDidMount() {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) =>
        this.setState({ data: data.results[0] }, () =>
          console.log(this.state, this.state.data.gender)
        )
      );
  }

  getUser = () => {
    // The Loding stage...
    this.setState({ isLoading: true });
    // The fetching stage...
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => {
        this.setState((prevState) => {
          return {
            isLoading: false,
            data: data.results[0],
          };
        });
      });
  };

  handleDisplayInfo = (e) => {
    switch (e.target.name) {
      case "name":
        return this.setState({
          currentProp: "name",
          currentValue: `${this.state.data.name.first} ${this.state.data.name.last}`,
        });
      case "email":
        return this.setState({
          currentProp: "email",
          currentValue: this.state.data.email,
        });
      case "age":
        return this.setState({
          currentProp: "age",
          currentValue: this.state.data.dob.age,
        });
      case "address":
        return this.setState({
          currentProp: "address",
          currentValue: `${this.state.data.location.street.number} ${this.state.data.location.street.name} ${this.state.data.location.city} ${this.state.data.location.state}`,
        });
      case "phone":
        return this.setState({
          currentProp: "contact",
          currentValue: this.state.data.cell,
        });
      case "password":
        return this.setState({
          currentProp: "password",
          currentValue: this.state.data.login.password,
        });
    }
  };

  render() {
    if (this.state.data) {
      return (
        <div className="App">
          <div className="card">
            <img src={this.state.data.picture.large} className="profile-img" />
            <p>My {this.state.currentProp} is</p>
            {this.state.data
              ? console.log("found it", this.state.data)
              : console.log("nothing", this.state)}
            <h3>{this.state.currentValue}</h3>
            <ul className="info-buttons" onMouseOver={this.handleDisplayInfo}>
              <li>
                <button href="www.github.com" name="name">
                  🙎
                </button>
              </li>
              <li>
                <button href="www.github.com" name="email">
                  📧
                </button>
              </li>
              <li>
                <button href="www.github.com" name="age">
                  🗓️
                </button>
              </li>
              <li>
                <button href="www.github.com" name="address">
                  📜
                </button>
              </li>
              <li>
                <button href="www.github.com" name="phone">
                  📞
                </button>
              </li>
              <li>
                <button href="www.github.com" name="password">
                  🔒
                </button>
              </li>
            </ul>
            <button
              type="submit"
              onClick={this.getUser}
              className="submit-button"
            >
              {this.state.isLoading ? "...Loading" : "Random User"}
            </button>
          </div>
        </div>
      );
    } else {
      return "Loading...";
    }
  }
}

export default App;
