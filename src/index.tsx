// import * as React from "react";
// import { Button, NativeModules, StyleSheet, Text, View } from "react-native";
//
// export const addOne = (input: number) => input + 1;
//
// export const Counter = () => {
//   const [count, setCount] = React.useState(0);
//
//   return (
//     <View style={styles.container}>
//       <Text>pressed {count} times</Text>
//       <Button onPress={() => setCount(addOne(count))} title="Press Me" />
//     </View>
//   );
// };
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     height: 200,
//   },
// });
//
// export default NativeModules.RNModuleTemplate;
import * as React from "react";
import RNGamePadSingle from "./components/single/single-joystick-buttons";
//import RNGamePadDual from "./components/dual/dual-joystick";

const RNGamePad = () => {
  renderKeyboard = () => {
    console.log("PROPS", this.props);
    // let { dualJoystick = false } = this.props;
    // if (dualJoystick) {
    //   return <RNGamePadDual {...this.props} />;
    // }
    return <RNGamePadSingle {...this.props} />;
  };

  return <>{this.renderKeyboard()}</>;
};

export default RNGamePad;
