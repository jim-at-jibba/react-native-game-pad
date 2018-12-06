import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  WebView
} from "react-native";

const js = options => {
  console.log("OPTIONS", options);
  let string = `
    var joystick = nipplejs.create({
      zone: document.getElementById('zone_joystick'),
      color: "${options.color}",
      mode: '${options.mode}',
          size: ${options.size},
          position: {
            left: "${options.position.left}",
            top: "${options.position.top}"
          },
    });

    joystick.on('start', function(evt, data) {
      let dataToReturn = { type: "onStart", event: evt.type, data }
      window.postMessage(JSON.stringify(dataToReturn));
    })

    joystick.on('end', function(evt, data) {
      let dataToReturn = { type: "onEnd", event: evt.type, data }
      window.postMessage(JSON.stringify(dataToReturn));
    })


    joystick.on('move', function(evt, data) {
      let dataToReturn = { type: "onMove", event: evt.type, data }
      window.postMessage(JSON.stringify(dataToReturn));
    })


    joystick.on('dir', function(evt, data) {
      let dataToReturn = { type: "onDir", event: evt.type, data }
      window.postMessage(JSON.stringify(dataToReturn));
    })


    joystick.on('plain', function(evt, data) {
      let dataToReturn = { type: "onPlain", event: evt.type, data }
      window.postMessage(JSON.stringify(dataToReturn));
    })
  `;

  return string;
};

export default class RNGamePad extends React.Component {
  constructor() {
    super();
  }

  invokeCallback(json) {
    let { type, event, data } = JSON.parse(json);
    if (this.props[type]) {
      this.props[type](event, data);
    }
  }

  render() {
    let { color = "green", size = 200 } = this.props.options;
    let {
      onButtonBPress,
      buttonAColor,
      onButtonAPress,
      buttonBColor
    } = this.props;
    console.log("PROPS", this.props);

    var options = {
      color: color,
      mode: "static",
      size,
      position: {
        left: "50%",
        top: "50%"
      }
    };
    return (
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <WebView
            source={require("./web/index.html")}
            onMessage={evt => this.invokeCallback(evt.nativeEvent.data)}
            injectedJavaScript={js(options)}
          />
        </View>
        <View style={{ flex: 1, backgroundColor: "white" }}>
          <View
            style={{
              flexDirection: "row",
              height: "100%"
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 50
              }}
            >
              <TouchableOpacity
                style={[styles.button, { backgroundColor: `${buttonAColor}` }]}
                onPress={() => onButtonAPress()}
              >
                <Text style={styles.buttonText}>A</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginRight: 50
              }}
            >
              <TouchableOpacity
                style={[styles.button, { backgroundColor: `${buttonBColor}` }]}
                onPress={() => onButtonBPress()}
              >
                <Text style={styles.buttonText}>B</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 90,
    width: 90,
    borderRadius: 90 / 2,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    fontSize: 22,
    color: "white",
    fontWeight: "700"
  }
});
