import React, { PureComponent } from "react";
import { View, StyleSheet, Text } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { FONT_RATIO, COLORS, LANGUAGE } from "../../../../utils/env";

export class Description extends PureComponent {
  render() {
    return (
      <View>
        <Text style={{ ...styles.text, width: "100%" }}>
          {LANGUAGE.dictionary.DESCRIPTION[LANGUAGE.SELECTED]}
        </Text>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            ...styles.descriptionTouchableWrapper,
            maxHeight: 0.2 * this.props.screenHeight,
          }}
        >
          <View
            style={{
              ...styles.descriptionWrapper,
            }}
          >
            <ScrollView style={{ ...styles.descriptionScrollView }}>
              <Text
                style={{
                  ...styles.text,
                  fontSize: 16 / FONT_RATIO,
                  fontWeight: "200",
                  textAlign: "justify",
                  paddingRight: 5,
                }}
              >
                {this.props.description ||
                  LANGUAGE.dictionary.DESCRIPTION_ERROR[LANGUAGE.SELECTED]}
                ...
              </Text>
            </ScrollView>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  descriptionWrapper: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  descriptionTouchableWrapper: {
    width: "100%",
  },
  descriptionScrollView: {
    flex: 1,
    width: "100%",
  },
  text: {
    fontWeight: "normal",
    color: COLORS.WHITE,
    fontSize: 24 / FONT_RATIO,
    fontWeight: "bold",
  },
});
