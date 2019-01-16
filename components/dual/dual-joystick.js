import React from "react";
import { StyleSheet, View, WebView } from "react-native";
import PropTypes from "prop-types";

const js = (options, options2) => {
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


    var joystick2 = nipplejs.create({
      zone: document.getElementById('zone_joystick2'),
      color: "${options2.color}",
      mode: '${options2.mode}',
          size: ${options2.size},
          position: {
            left: "${options2.position.left}",
            top: "${options2.position.top}"
          },
    });

    joystick.on('start', function(evt, data) {
      let dataToReturn = { type: "onLeftStart", event: evt.type, data }
      window.postMessage(JSON.stringify(dataToReturn));
    })

    joystick.on('end', function(evt, data) {
      let dataToReturn = { type: "onLeftEnd", event: evt.type, data }
      window.postMessage(JSON.stringify(dataToReturn));
    })


    joystick.on('move', function(evt, data) {
      let dataToReturn = { type: "onLeftMove", event: evt.type, data }
      window.postMessage(JSON.stringify(dataToReturn));
    })


    joystick.on('dir', function(evt, data) {
      let dataToReturn = { type: "onLeftDir", event: evt.type, data }
      window.postMessage(JSON.stringify(dataToReturn));
    })


    joystick.on('dir:up', function(evt, data) {
      let dataToReturn = { type: "onLeftDirUp", event: evt.type, data }
      window.postMessage(JSON.stringify(dataToReturn));
    })

    joystick.on('dir:down', function(evt, data) {
      let dataToReturn = { type: "onLeftDirDown", event: evt.type, data }
      window.postMessage(JSON.stringify(dataToReturn));
    })

    joystick.on('dir:left', function(evt, data) {
      let dataToReturn = { type: "onLeftDirLeft", event: evt.type, data }
      window.postMessage(JSON.stringify(dataToReturn));
    })

    joystick.on('dir:right', function(evt, data) {
      let dataToReturn = { type: "onLeftDirRight", event: evt.type, data }
      window.postMessage(JSON.stringify(dataToReturn));
    })

    joystick.on('plain', function(evt, data) {
      let dataToReturn = { type: "onLeftPlane", event: evt.type, data }
      window.postMessage(JSON.stringify(dataToReturn));
    })

    joystick.on('plain:up', function(evt, data) {
      let dataToReturn = { type: "onLeftPlaneUp", event: evt.type, data }
      window.postMessage(JSON.stringify(dataToReturn));
    })

    joystick.on('plain:down', function(evt, data) {
      let dataToReturn = { type: "onLeftPlaneDown", event: evt.type, data }
      window.postMessage(JSON.stringify(dataToReturn));
    })

    joystick.on('plain:left', function(evt, data) {
      let dataToReturn = { type: "onLeftPlaneLeft", event: evt.type, data }
      window.postMessage(JSON.stringify(dataToReturn));
    })

    joystick.on('plain:right', function(evt, data) {
      let dataToReturn = { type: "onLeftPlaneRight", event: evt.type, data }
      window.postMessage(JSON.stringify(dataToReturn));
    })

    joystick2.on('start', function(evt, data) {
      let dataToReturn = { type: "onRightStart", event: evt.type, data }
      window.postMessage(JSON.stringify(dataToReturn));
    })

    joystick2.on('end', function(evt, data) {
      let dataToReturn = { type: "onRightEnd", event: evt.type, data }
      window.postMessage(JSON.stringify(dataToReturn));
    })


    joystick2.on('move', function(evt, data) {
      let dataToReturn = { type: "onRightMove", event: evt.type, data }
      window.postMessage(JSON.stringify(dataToReturn));
    })


    joystick2.on('dir', function(evt, data) {
      let dataToReturn = { type: "onRightDir", event: evt.type, data }
      window.postMessage(JSON.stringify(dataToReturn));
    })


    joystick2.on('dir:up', function(evt, data) {
      let dataToReturn = { type: "onRightDirUp", event: evt.type, data }
      window.postMessage(JSON.stringify(dataToReturn));
    })

    joystick2.on('dir:down', function(evt, data) {
      let dataToReturn = { type: "onRightDirDown", event: evt.type, data }
      window.postMessage(JSON.stringify(dataToReturn));
    })

    joystick2.on('dir:left', function(evt, data) {
      let dataToReturn = { type: "onRightDirLeft", event: evt.type, data }
      window.postMessage(JSON.stringify(dataToReturn));
    })

    joystick2.on('dir:right', function(evt, data) {
      let dataToReturn = { type: "onRightDirRight", event: evt.type, data }
      window.postMessage(JSON.stringify(dataToReturn));
    })

    joystick2.on('plain', function(evt, data) {
      let dataToReturn = { type: "onRightPlane", event: evt.type, data }
      window.postMessage(JSON.stringify(dataToReturn));
    })

    joystick2.on('plain:up', function(evt, data) {
      let dataToReturn = { type: "onRightPlaneUp", event: evt.type, data }
      window.postMessage(JSON.stringify(dataToReturn));
    })

    joystick2.on('plain:down', function(evt, data) {
      let dataToReturn = { type: "onRightPlaneDown", event: evt.type, data }
      window.postMessage(JSON.stringify(dataToReturn));
    })

    joystick2.on('plain:left', function(evt, data) {
      let dataToReturn = { type: "onRightPlaneLeft", event: evt.type, data }
      window.postMessage(JSON.stringify(dataToReturn));
    })

    joystick2.on('plain:right', function(evt, data) {
      let dataToReturn = { type: "onRightPlaneRight", event: evt.type, data }
      window.postMessage(JSON.stringify(dataToReturn));
    })

  `;

  return string;
};

class RNGamePadDual extends React.Component {
  invokeCallback(json) {
    let { type, event, data } = JSON.parse(json);
    if (this.props[type]) {
      this.props[type](event, data);
    }
  }

  render() {
    let { color: c1 = "green", size: s1 = 200 } = this.props.options;
    let { color: c2 = "red", size: s2 = 200 } = this.props.options2;
    console.log("PROPS", this.props);

    var options = {
      color: c1,
      mode: "static",
      size: s1,
      position: {
        left: "50%",
        top: "50%"
      }
    };

    var options2 = {
      color: c2,
      mode: "static",
      size: s2,
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
            injectedJavaScript={js(options, options2)}
          />
        </View>
      </View>
    );
  }
}
RNGamePadDual.propTypes = {
  options: PropTypes.object,
  options2: PropTypes.object
};

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

export default RNGamePadDual;
