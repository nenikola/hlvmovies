import React, { PureComponent } from "react";
import { View, Text, StyleSheet, PixelRatio } from "react-native";
import { FONT_RATIO, COLORS, LANGUAGE } from "../../../../utils/env";

export class Heading extends PureComponent {
  render() {
    return (
      <View>
        <Text style={{ ...styles.text, color: "white" }}>
          {this.props.title}
        </Text>
        <Text
          style={{
            ...styles.text,
            color: COLORS.DARK_GRAY,
            fontSize: 22 / FONT_RATIO,
            fontWeight: "500",
          }}
        >
          ({this.props.releaseDate.getFullYear()})
        </Text>
        <Text
          style={{
            ...styles.text,
            color: COLORS.WHITE,
            maxWidth: "100%",
            overflow: "scroll",
            fontSize: 16 / FONT_RATIO,
            fontWeight: "500",
          }}
        >
          {this.props.genres[0].name
            ? this.props.genres.map((genre) => genre.name).join(", ")
            : LANGUAGE.dictionary.GENRES_ERROR[LANGUAGE.SELECTED]}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontWeight: "normal",
    color: COLORS.WHITE,
    fontSize: 24 / FONT_RATIO,
    fontWeight: "bold",
  },
});
