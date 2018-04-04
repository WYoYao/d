import React, { Component } from "react";
import style from "./index.css";

export default class Layout extends Component {
  render() {
    let { children } = this.props;

    return <div className={style.layout}>{children}</div>;
  }
}
