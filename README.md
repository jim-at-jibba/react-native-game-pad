# React native game pad (ios + android)

A React Native game pad using nipplejs for an on-screen joystick

[![NPM](https://nodei.co/npm/react-native-game-pad.png)](https://nodei.co/npm/react-native-game-pad/)

[![npm version](https://badge.fury.io/js/react-native-game-pad.svg)](https://badge.fury.io/js/react-native-game-pad)

<p align="center">
	<img src ="./example.png" />
</p>

## Install

```
npm i react-native-game-pad -S
```

---

## Usage

Import it into your project

```
import RNGamePad from 'react-native-game-pad';
```

## Options

```javascript
var options = {
  color: String,
  size: Integer
};
```

## Prop

```javascript
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
```

## TODO:

* [ ] allow different pad layouts
* [ ] Allow different types of joystick. Currently on `static` is supported

## License

react-native-game-pad is available under the MIT license. See the LICENSE file for more info.
