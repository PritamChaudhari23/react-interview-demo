import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  // This lifecycle method is called after the component is mounted
  componentDidMount() {
    this.interval = setInterval(this.incrementCounter, 1000);
  }

  // This lifecycle method is called before the component is unmounted
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // Custom method to increment the counter
  incrementCounter = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
      </div>
    );
  }
}
export default ClassCounter;
