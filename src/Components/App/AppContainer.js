import React, { Component } from "react";
import AppPresenter from "./AppPresenter";
import Store from "store";

class AppContainer extends Component {
  //functions which we want to include in store(provider) should be in the constructor
  constructor(props) {
    super(props);
    this.state = {
      notifications: {
        "1": {
          id: 1,
          text: "one",
          seen: false
        },
        "2": {
          id: 2,
          text: "two",
          seen: false
        },
        "3": {
          id: 3,
          text: "three",
          seen: false
        }
      }
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
