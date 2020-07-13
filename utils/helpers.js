import { Dimensions } from "react-native";
import { MOVIES_SERVICE_CONFIG, LANGUAGE } from "./env";

export function getWindowAndScreenDimensions() {
  return {
    windowHeight: Dimensions.get("window").height,
    windowWidth: Dimensions.get("window").width,
    screenHeight: Dimensions.get("screen").height,
    screenWidth: Dimensions.get("screen").width,
  };
}
/**Returns base query parameters for requesting TMDB API*/
export function baseQueryParams() {
  return {
    api_key: MOVIES_SERVICE_CONFIG.API_TMDB_KEY,
    language: LANGUAGE.SELECTED,
  };
}
