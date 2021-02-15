import React from "react";
import { View } from "react-native";
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  useAnimatedGestureHandler,
} from "react-native-reanimated";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";

function RNSingleStick() {
  const translation = {
    x: useSharedValue(0),
    y: useSharedValue(0),
  };

  const gestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {
      startX: number;
      startY: number;
    }
  >({
    onStart: (_, ctx) => {
      ctx.startX = translation.x.value;
      ctx.startY = translation.y.value;
    },
    onActive: (event, ctx) => {
      translation.x.value = ctx.startX + event.translationX;
      translation.y.value = ctx.startY + event.translationY;
      console.log({ event, ctx });
    },
    onEnd: (_) => {
      translation.x.value = withSpring(0);
      translation.y.value = withSpring(0);
    },
  });

  const styles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translation.x.value,
        },
        {
          translateY: translation.y.value,
        },
      ],
    };
  });

  return (
    <View
      style={{
        flex: 1,
        margin: 50,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          position: "absolute",
          width: 110,
          height: 110,
          borderRadius: 125 / 2,
          backgroundColor: "red",
        }}
      />
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View
          style={[
            {
              width: 80,
              height: 80,
              backgroundColor: "green",
              borderRadius: 50,
            },
            styles,
          ]}
        />
      </PanGestureHandler>
    </View>
  );
}
export default RNSingleStick;
