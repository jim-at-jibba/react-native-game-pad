import React from "react";
import { Text, View, WebView } from "react-native";

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
    let { color = "green", size = 400 } = this.props.options;
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
        <View style={{ flex: 1 }}>
          <Text>Other buttons</Text>
        </View>
      </View>
    );
  }
}
