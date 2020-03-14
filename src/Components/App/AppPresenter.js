import React, { Fragment } from "react";
import Header from "../Header";
import Flex from "styled-flex-component";
import Notification from "../Notification";

const AppPresenter = () => (
  <Fragment>
    <Header />
    <Flex alignCenter full column>
      <Notification id={1} text={"hello"} seen={false} />
    </Flex>
  </Fragment>
);

export default AppPresenter;
