import React, { Component } from "react";
import style from "./index.css";

export default class Layout extends Component {
  render() {
    let { children } = this.props;

    return <div className="b1" className={`${style.layout} b1`}>{children}</div>;
  }
}
