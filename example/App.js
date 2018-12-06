import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import RNGamePad from "react-native-game-pad";

export default class App extends Component<Props> {
  handleOnStart = (evt, data) => {
    console.log("onStart", evt, data);
  };

  handleOnEnd = (evt, data) => {
    console.log("onEnd", evt, data);
  };

  handleOnMove = (evt, data) => {
    console.log("onMove", evt, data);
  };

  handleOnDir = (evt, data) => {
    console.log("onDir", evt, data);
  };

  handleOnPlain = (evt, data) => {
    console.log("onPlain", evt, data);
  };

  handleButtonAPress = () => {
    console.log("Button A");
  };

  handleButtonBPress = () => {
    console.log("Button B");
  };

  render() {
    return (
      <RNGamePad
        onStart={this.handleOnStart}
        onEnd={this.handleOnEnd}
        onMove={this.handleOnMove}
        onDir={this.handleOnDir}
        onPlain={this.handleOnPlain}
        onButtonAPress={this.handleButtonAPress}
        buttonAColor="red"
        onButtonBPress={this.handleButtonBPress}
        buttonBColor="green"
        options={{
          size: 200,
          color: "red"
        }}
      />
    );
  }
}
