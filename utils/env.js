import { PixelRatio } from "react-native";

const MOVIES_SERVICE_CONFIG = {
  API_TMDB_URL: "https://api.themoviedb.org/",
  API_TMDB_IMAGES_URL: "https://image.tmdb.org/t/p/w500",
  API_TMDB_KEY: "c9b3394d6dc9c4590158a4ca3e993e75",
  API_TMDB_LANGUAGE: {
    SERBIAN: "sr",
    ENGLISH: "en-US",
  },
  API_TMDB_URIS: {
    MOVIES: "3/movie/popular",
    GENRES: "3/genre/movie/list",
    MOVIE: "3/movie/",
  },
};

const LANGUAGE = {
  SELECTED: "sr",
  dictionary: {
    RATE: {
      sr: "Корисничка оцена",
      "en-US": "Users score",
    },
    DESCRIPTION: {
      sr: "Опис",
      "en-US": "Overview",
    },
    DESCRIPTION_ERROR: {
      sr: "Опис није тренутно доступан",
      "en-US": "Overview not available at the moment",
    },
    CONNECTION_ERROR: {
      sr: "Проблем са конекцијом",
      "en-US": "Connection error",
    },
    CREDITS_ERROR: {
      sr: "Подаци од ауторима нису тренутно доступни",
      "en-US": "Credits not available at the moment",
    },
    GENRES_ERROR: {
      sr: "Жанрови нису тренутно доступни",
      "en-US": "Genres not available at the moment",
    },
  },
};

const CREDITS_JOBS = {
  "Executive Producer": true,
  Producer: true,
  Director: true,
};
const SIZES = {
  CIRCULAR_RATE_SIZE: 0.26,
  CIRCULAR_RATE_VERTICAL_MARGIN: "10%",
  CARD_IMAGE_WIDTH: 0.85,
  CARD_IMAGE_HEIGHT: 0.7,
  CARD_BORDER_RADIUS: 25,
  CARD_LEFT_PADDING: "15%",
  CARD_BASE_VERTICAL_PADDING: "5%",
  DETAILS_BASE_PADDING: "5%",
  DETAILS_VERTICAL_PADDING: "10%",
  DETAILS_HORIZONTAL_PADDING: "5%",
};
const MONTHS = {
  1: "јан",
  2: "феб",
  3: "мар",
  4: "апр",
  5: "мај",
  6: "јун",
  7: "јул",
  8: "авг",
  9: "сеп",
  10: "окт",
  11: "нов",
  12: "дец",
};
const COLORS = {
  PEARL: "#FDFDFD",
  WHITE: "#FFFFFF",
  LIGHT_GRAY: "lightgray",
  DARK_GRAY: "darkgray",
  BLACK: "#000000",
  LIGHT_GREEN: "#cfd352",
  BLACK_GREEN: "#091c22",
  DARK_GREEN: "#403d16",
};

const FONT_RATIO = 3 / PixelRatio.get();

export {
  MOVIES_SERVICE_CONFIG,
  CREDITS_JOBS,
  FONT_RATIO,
  MONTHS,
  COLORS,
  SIZES,
  LANGUAGE,
};
