import React, { Component } from "react";
import RNGamePad from "react-native-game-pad";

export default class App extends Component {
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

  handleOnDirUp = (evt, data) => {
    console.log("onDirUp", evt, data);
  };

  handleOnDirDown = (evt, data) => {
    console.log("onDirDown", evt, data);
  };

  handleOnDirLeft = (evt, data) => {
    console.log("onDirLeft", evt, data);
  };

  handleOnDirRight = (evt, data) => {
    console.log("onDirRight", evt, data);
  };

  handleOnPlane = (evt, data) => {
    console.log("onPlane", evt, data);
  };

  handleOnPlaneUp = (evt, data) => {
    console.log("onPlaneUp", evt, data);
  };

  handleOnPlaneDown = (evt, data) => {
    console.log("onPlaneDown", evt, data);
  };

  handleOnPlaneLeft = (evt, data) => {
    console.log("onPlaneLeft", evt, data);
  };

  handleOnPlaneRight = (evt, data) => {
    console.log("onPlaneRight", evt, data);
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
        onDirUp={this.handleOnDirUp}
        onDirDown={this.handleOnDirDown}
        onDirLeft={this.handleOnDirLeft}
        onDirRight={this.handleOnDirRight}
        onPlane={this.handleOnPlane}
        onPlaneUp={this.handleOnPlaneUp}
        onPlaneDown={this.handleOnPlaneDown}
        onPlaneLeft={this.handleOnPlaneLeft}
        onPlaneRight={this.handleOnPlaneRight}
        onButtonAPress={this.handleButtonAPress}
        buttonAColor="red"
        onButtonBPress={this.handleButtonBPress}
        buttonBColor="green"
        dualJoystick={true}
        options={{
          size: 200,
          color: "blue"
        }}
        options2={{
          size: 200,
          color: "red"
        }}
      />
    );
  }
}
