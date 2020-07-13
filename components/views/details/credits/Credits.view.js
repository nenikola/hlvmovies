import React, { PureComponent } from "react";
import { View, StyleSheet, Text } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { FONT_RATIO, COLORS, LANGUAGE } from "../../../../utils/env";

export class Credits extends PureComponent {
  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={{ ...styles.creditsTouchableWrapper }}
      >
        <View
          style={{
            ...styles.creditsWrapper,
          }}
        >
          {this.props.credits ? (
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {this.props.credits.map((credit, index) => (
                <View
                  key={index}
                  style={{
                    ...styles.singleCreditWrapper,
                  }}
                >
                  <Text
                    style={{
                      ...styles.text,
                      fontSize: 18 / FONT_RATIO,
                      fontWeight: "bold",
                    }}
                  >
                    {credit["name"] || "Опис није доступан..."}
                  </Text>
                  <Text
                    style={{
                      ...styles.text,
                      fontSize: 16 / FONT_RATIO,
                      fontWeight: "200",
                      textAlign: "center",
                      opacity: 0.8,
                    }}
                  >
                    {credit["job"] || "Опис није доступан..."}
                  </Text>
                </View>
              ))}
            </ScrollView>
          ) : (
            <Text
              style={{
                ...styles.text,
                fontSize: 16 / FONT_RATIO,
                fontWeight: "200",
                textAlign: "center",
                opacity: 0.8,
              }}
            >
              {LANGUAGE.dictionary.CREDITS_ERROR[LANGUAGE.SELECTED]}...
            </Text>
          )}
        </View>
      </TouchableOpacity>
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
  creditsTouchableWrapper: {
    height: 50,
    marginBottom: 10,
    marginTop: 25,
  },
  creditsWrapper: {
    height: "100%",
    display: "flex",
  },
  singleCreditWrapper: {
    marginRight: 20,
  },
});
