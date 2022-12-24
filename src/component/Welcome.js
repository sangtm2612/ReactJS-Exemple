import React, { Component } from "react";

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: true,
    };
  }

  render(props) {
    return (
      <div>
        <p>
          Welcome {this.props.age}, <Logout />
          <button onClick={() => {
            this.state.check = !this.state.check;
            console.log(this.state.check)
          }} style="">Click</button>
        </p>
      </div>
    );
  }
}

class Logout extends Component {
  render() {
    return <a href="#">logout</a>;
  }
}
