import React, { Component } from "react";
import AppPresenter from "./AppPresenter";
import Store from "store";

class AppContainer extends Component {
  //functions which we want to include in store(provider) should be in the constructor
  constructor(props) {
    super(props);
    this._changeMessage = () => {
      if (this.state.message === "hello") {
        this.setState({
          message: "bye"
        });
      } else {
        this.setState({
          message: "hello"
        });
      }
    };
    this.state = {
      message: "hello",
      changeMessage: this._changeMessage
    };
  }
  render() {
    return (
      <Store.Provider value={this.state}>
        <AppPresenter />
      </Store.Provider>
    );
  }
}

export default AppContainer;
