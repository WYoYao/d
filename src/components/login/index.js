import React, { Component } from "react";
import Layout from "../layout/index.js";

import { Button, WhiteSpace, WingBlank } from "antd-mobile";
import styles from './index.css';
import Round from '../round/index.js';

export default class Login extends Component {
  render() {
    return (
      <Layout>
        <Round title="123"/>
      </Layout >
    );
  }
}
