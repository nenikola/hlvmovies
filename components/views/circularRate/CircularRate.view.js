import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { COLORS, FONT_RATIO } from "../../../utils/env";

export default function CircularRate({ progress, size }) {
  const strokeWidth = 6;
  const { PI } = Math;
  const r = (size - strokeWidth) / 2;
  const cx = (size + 20) / 2;
  const cy = (size + 20) / 2;
  const circumference = r * 2 * PI;
  return (
    <View
      style={{
        ...styles.wrapper,
        width: size,
        height: size,
        borderRadius: size,
      }}
    >
      <Svg width={size + 20} height={size + 20} style={styles.container}>
        <Circle
          fill={COLORS.BLACK_GREEN}
          {...{
            cx,
            cy,
            r: r + 10,
          }}
        />
        <Circle
          stroke={COLORS.DARK_GREEN}
          fill={"none"}
          {...{
            strokeWidth,
            cx,
            cy,
            r,
          }}
        />
        <Circle
          stroke={COLORS.LIGHT_GREEN}
          fill={"none"}
          {...{
            strokeWidth,
            strokeDasharray: `${circumference}, ${circumference}`,
            strokeDashoffset: circumference - (progress / 100) * circumference,
            cx,
            cy,
            r,
          }}
        />
      </Svg>
      <Text style={{ ...styles.text }}>{progress}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    transform: [{ rotateZ: "270deg" }],
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    position: "absolute",
    fontSize: 26 / FONT_RATIO,
    fontWeight: "bold",
    color: COLORS.WHITE,
  },
});
