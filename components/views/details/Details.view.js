import React, { PureComponent } from "react";
import { Text, View, ImageBackground, StyleSheet } from "react-native";
import CircularRate from "../circularRate/CircularRate.view";
import {
  FONT_RATIO,
  COLORS,
  MOVIES_SERVICE_CONFIG,
  SIZES,
  LANGUAGE,
} from "../../../utils/env";

import { getWindowAndScreenDimensions } from "../../../utils/helpers";
import { Heading } from "./heading/Heading.view";
import { Description } from "./description/Description.view";
import { Credits } from "./credits/Credits.view";

export default class Details extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { ...this.props };
  }
  render() {
    const { screenHeight, windowWidth } = getWindowAndScreenDimensions();
    return (
      <View
        style={{
          ...styles.container,
          width: windowWidth,
        }}
      >
        <ImageBackground
          source={{
            uri: `${MOVIES_SERVICE_CONFIG.API_TMDB_IMAGES_URL}${this.state.imageURL}`,
          }}
          style={{
            ...styles.image,
            width: windowWidth,
          }}
        ></ImageBackground>
        <View
          style={{
            ...styles.contentWrapper,
          }}
        >
          <Heading
            title={this.state.title}
            releaseDate={this.state.releaseDate}
            genres={this.state.genres}
          ></Heading>
          <View
            style={{
              ...styles.circularRateWrapper,
            }}
          >
            <CircularRate
              progress={this.state.voteRate * 10}
              size={SIZES.CIRCULAR_RATE_SIZE * windowWidth}
            />
            <Text
              style={{
                ...styles.text,
                fontSize: 18 / FONT_RATIO,
                marginLeft: 20,
                flex: 1,
              }}
            >
              {LANGUAGE.dictionary.RATE[LANGUAGE.SELECTED]}
            </Text>
          </View>
          <Description
            description={this.state.description}
            screenHeight={screenHeight}
          ></Description>
          <Credits credits={this.state.credits}></Credits>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    flexDirection: "column",
    backgroundColor: COLORS.BLACK_GREEN,
  },
  image: {
    height: "100%",
    opacity: 0.1,
  },
  text: {
    fontWeight: "normal",
    color: COLORS.WHITE,
    fontSize: 24 / FONT_RATIO,
    fontWeight: "bold",
  },
  contentWrapper: {
    position: "absolute",
    padding: SIZES.DETAILS_BASE_PADDING,
    paddingTop: SIZES.DETAILS_VERTICAL_PADDING,
    display: "flex",
    flexDirection: "column",
  },
  circularRateWrapper: {
    marginVertical: SIZES.CIRCULAR_RATE_VERTICAL_MARGIN,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
