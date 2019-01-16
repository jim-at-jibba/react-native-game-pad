import * as React from "react";
import PropTypes from "prop-types";
import { RNGamePadSingle } from "./components/single/single-joystick-buttons";
import RNGamePadDual from "./components/dual/dual-joystick";

class RNGamePad extends React.Component {
  renderKeyboard = () => {
    console.log("PROPS", this.props);
    let { dualJoystick } = this.props;
    if (dualJoystick) {
      return <RNGamePadDual {...this.props} />;
    }
    return <RNGamePadSingle {...this.props} />;
  };

  render() {
    return <>{this.renderKeyboard()}</>;
  }
}

RNGamePad.propTypes = {
  dualJoystick: PropTypes.bool
};

export default RNGamePad;
