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

  // Example handlers for dual stick user
  handleLeftOnStart = (evt, data) => {
    console.log("onLeftStart", evt, data);
  };

  handleLeftOnEnd = (evt, data) => {
    console.log("onLeftEnd", evt, data);
  };

  handleLeftOnMove = (evt, data) => {
    console.log("onLeftMove", evt, data);
  };

  handleLeftOnDir = (evt, data) => {
    console.log("onLeftDir", evt, data);
  };

  handleLeftOnDirUp = (evt, data) => {
    console.log("onLeftDirUp", evt, data);
  };

  handleLeftOnDirDown = (evt, data) => {
    console.log("onLeftDirDown", evt, data);
  };

  handleLeftOnDirLeft = (evt, data) => {
    console.log("onLeftDirLeft", evt, data);
  };

  handleLeftOnDirRight = (evt, data) => {
    console.log("onLeftDirRight", evt, data);
  };

  handleLeftOnPlane = (evt, data) => {
    console.log("onLeftPlane", evt, data);
  };

  handleLeftOnPlaneUp = (evt, data) => {
    console.log("onLeftPlaneUp", evt, data);
  };

  handleLeftOnPlaneDown = (evt, data) => {
    console.log("onLeftPlaneDown", evt, data);
  };

  handleLeftOnPlaneLeft = (evt, data) => {
    console.log("onLeftPlaneLeft", evt, data);
  };

  handleLeftOnPlaneRight = (evt, data) => {
    console.log("onLeftPlaneRight", evt, data);
  };

  handleRightOnStart = (evt, data) => {
    console.log("onRightStart", evt, data);
  };

  handleRightOnEnd = (evt, data) => {
    console.log("onRightEnd", evt, data);
  };

  handleRightOnMove = (evt, data) => {
    console.log("onRightMove", evt, data);
  };

  handleRightOnDir = (evt, data) => {
    console.log("onRightDir", evt, data);
  };

  handleRightOnDirUp = (evt, data) => {
    console.log("onRightDirUp", evt, data);
  };

  handleRightOnDirDown = (evt, data) => {
    console.log("onRightDirDown", evt, data);
  };

  handleRightOnDirLeft = (evt, data) => {
    console.log("onRightDirLeft", evt, data);
  };

  handleRightOnDirRight = (evt, data) => {
    console.log("onRightDirRight", evt, data);
  };

  handleRightOnPlane = (evt, data) => {
    console.log("onRightPlane", evt, data);
  };

  handleRightOnPlaneUp = (evt, data) => {
    console.log("onRightPlaneUp", evt, data);
  };

  handleRightOnPlaneDown = (evt, data) => {
    console.log("onRightPlaneDown", evt, data);
  };

  handleRightOnPlaneLeft = (evt, data) => {
    console.log("onRightPlaneLeft", evt, data);
  };

  handleRightOnPlaneRight = (evt, data) => {
    console.log("onRightPlaneRight", evt, data);
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
        onLeftStart={this.handleLeftOnStart}
        onLeftEnd={this.handleLeftOnEnd}
        onLeftMove={this.handleLeftOnMove}
        onLeftDir={this.handleLeftOnDir}
        onLeftDirUp={this.handleLeftOnDirUp}
        onLeftDirDown={this.handleLeftOnDirDown}
        onLeftDirLeft={this.handleLeftOnDirLeft}
        onLeftDirRight={this.handleLeftOnDirRight}
        onLeftPlane={this.handleLeftOnPlane}
        onLeftPlaneUp={this.handleLeftOnPlaneUp}
        onLeftPlaneDown={this.handleLeftOnPlaneDown}
        onLeftPlaneLeft={this.handleLeftOnPlaneLeft}
        onLeftPlaneRight={this.handleLeftOnPlaneRight}
        onRightStart={this.handleRightOnStart}
        onRightEnd={this.handleRightOnEnd}
        onRightMove={this.handleRightOnMove}
        onRightDir={this.handleRightOnDir}
        onRightDirUp={this.handleRightOnDirUp}
        onRightDirDown={this.handleRightOnDirDown}
        onRightDirLeft={this.handleRightOnDirLeft}
        onRightDirRight={this.handleRightOnDirRight}
        onRightPlane={this.handleRightOnPlane}
        onRightPlaneUp={this.handleRightOnPlaneUp}
        onRightPlaneDown={this.handleRightOnPlaneDown}
        onRightPlaneLeft={this.handleRightOnPlaneLeft}
        onRightPlaneRight={this.handleRightOnPlaneRight}
        onButtonAPress={this.handleButtonAPress}
        buttonAColor="red"
        onButtonBPress={this.handleButtonBPress}
        buttonBColor="green"
        dualJoystick={true}
        options={{
          size: 200,
          color: "blue",
          lockY: true
        }}
        options2={{
          size: 200,
          color: "red",
          lockX: true
        }}
      />
    );
  }
}
