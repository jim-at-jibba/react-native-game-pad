import * as React from "react";
import RNGamePadSingle from "./components/single/single-joystick-buttons";
//import RNGamePadDual from "./components/dual/dual-joystick";
interface Props {}

const RNGamePad = (props: Props) => {
  const renderKeyboard = () => {
    console.log("PROPS", props);
    // let { dualJoystick = false } = this.props;
    // if (dualJoystick) {
    //   return <RNGamePadDual {...this.props} />;
    // }
    return <RNGamePadSingle {...props} />;
  };

  return <>{renderKeyboard()}</>;
};

export default RNGamePad;
