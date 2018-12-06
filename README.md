# React native game pad (ios + android)

A React Native game pad using nipplejs for an on-screen joystick;

[![npm version](https://badge.fury.io/js/react-native-game-pad.svg)](https://badge.fury.io/js/react-native-game-pad)

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
  size: Integer,
  position: Object, // preset position for 'static' mode
  restJoystick: Boolean,
  catchDistance: Number // distance to recycle previous joystick in
};
```

## TODO:

* [ ] allow different pad layouts
* [ ] Allow different types of joystick. Currently on `static` is supported

## License

react-native-game-pad is available under the MIT license. See the LICENSE file for more info.
