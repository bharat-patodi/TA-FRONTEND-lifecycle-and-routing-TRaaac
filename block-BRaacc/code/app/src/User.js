import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.id = this.props.match.params.id;
    this.state = {
      currentUser: null,
      currentView: "",
      currentTab: "",
    };
  }
  componentDidMount() {
    fetch(`https://api.github.com/users/${this.id}`)
      .then((res) => res.json())
      .then((data) =>
        this.setState(
          {
            currentUser: data,
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  handleHover = (e) => {
    console.log(e.target.textContent);
    if (e.target.textContent.includes("repos")) {
      this.setState(
        {
          currentView: "repos",
        },
        () => {
          console.log(this.state);
        }
      );
    }
    if (e.target.textContent.includes("followers")) {
      this.setState(
        {
          currentView: "followers",
        },
        () => {
          console.log(this.state);
        }
      );
    }
    if (e.target.textContent.includes("following")) {
      this.setState(
        {
          currentView: "following",
        },
        () => {
          console.log(this.state);
        }
      );
    }
  };

  handleDetailedView = () => {
    if (this.state.currentView) {
      fetch(
        `https://api.github.com/users/${this.state.currentUser.login}/${this.state.currentView}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log("this here: ", data);
          this.setState({
            currentTab: data,
          });
        });
      return (
        <ul>
          {this.state.currentTab.map((user) => {
            return <li key={user.id}>{user.login}</li>;
          })}
        </ul>
      );
    }
  };

  render() {
    console.log(this.props.match.params.id);
    if (this.state.currentUser) {
      return (
        <div className="user-info">
          <section className="user-info-simple">
            <p>{this.state.currentUser.login}</p>
            <p>{this.state.currentUser.bio}</p>
          </section>
          <section className="user-info--advanced-brief">
            <div className="repos" onClick={this.handleHover}>
              {this.state.currentUser.public_repos} repos
            </div>
            <div className="followers" onClick={this.handleHover}>
              {this.state.currentUser.followers} followers
            </div>
            <div className="following" onClick={this.handleHover}>
              {this.state.currentUser.following} following
            </div>
          </section>
          <section className="user-info--advanced-detailed">
            {this.handleDetailedView()}
          </section>
        </div>
      );
    } else {
      return <p>...Loading...</p>;
    }
  }
}

export default User;
