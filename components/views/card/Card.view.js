import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableHighlight,
} from "react-native";
import CircularRate from "../circularRate/CircularRate.view";
import { getWindowAndScreenDimensions } from "./../../../utils/helpers";
import {
  FONT_RATIO,
  COLORS,
  MONTHS,
  SIZES,
  MOVIES_SERVICE_CONFIG,
} from "../../../utils/env";

export default function Card({ navigation, item, index }) {
  const { title, releaseDate, voteRate, imageURL } = item;
  const {
    windowWidth,
    windowHeight,
    screenHeight,
  } = getWindowAndScreenDimensions();

  return (
    <TouchableHighlight
      activeOpacity={0.5}
      underlayColor={COLORS.LIGHT_GREEN}
      style={{
        borderRadius: SIZES.CARD_BORDER_RADIUS,
      }}
      onPress={() => {
        navigation.navigate("DetailsList", { index });
      }}
    >
      <View
        style={{
          ...styles.container,
          width: windowWidth,
          minHeight: windowHeight + (screenHeight - windowHeight) / 2,
        }}
      >
        <ImageBackground
          source={{
            uri: `${MOVIES_SERVICE_CONFIG.API_TMDB_IMAGES_URL}${imageURL}`,
          }}
          style={{
            ...styles.image,
            width: SIZES.CARD_IMAGE_WIDTH * windowWidth,
            height: SIZES.CARD_IMAGE_HEIGHT * windowHeight,
          }}
        ></ImageBackground>
        <View
          style={{
            ...styles.contentWrapper,
          }}
        >
          <View
            style={{
              top: (-SIZES.CIRCULAR_RATE_SIZE / 2) * windowWidth,
            }}
          >
            <CircularRate
              progress={voteRate * 10}
              size={SIZES.CIRCULAR_RATE_SIZE * windowWidth}
            ></CircularRate>
          </View>
          <View
            style={{
              ...styles.headlineWrapper,
            }}
          >
            <Text
              style={{
                ...styles.text,
              }}
            >
              {title}
            </Text>
            <Text
              style={{
                ...styles.text,
                opacity: 0.3,
                fontWeight: "normal",
              }}
            >
              {`${releaseDate.getDate()}.${
                MONTHS[releaseDate.getMonth()]
              }.${releaseDate.getFullYear()}.`}
            </Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    borderBottomColor: COLORS.LIGHT_GREEN,
    borderRadius: SIZES.CARD_BORDER_RADIUS,
    borderBottomWidth: 1,
    paddingTop: SIZES.CARD_BASE_VERTICAL_PADDING,
    paddingTop: SIZES.CARD_BASE_VERTICAL_PADDING,
    backgroundColor: COLORS.PEARL,
    alignItems: "center",
  },
  image: {
    borderRadius: SIZES.CARD_BORDER_RADIUS,
    borderWidth: 1,
    borderColor: COLORS.LIGHT_GRAY,
    overflow: "hidden",
  },
  text: {
    color: COLORS.BLACK,
    fontSize: 26 / FONT_RATIO,
    fontWeight: "bold",
  },
  headlineWrapper: {
    marginTop: `-${SIZES.CARD_BASE_VERTICAL_PADDING}`,
  },
  contentWrapper: {
    width: "100%",
    paddingHorizontal: SIZES.CARD_LEFT_PADDING,
    paddingBottom: SIZES.CARD_BASE_VERTICAL_PADDING,
  },
});
