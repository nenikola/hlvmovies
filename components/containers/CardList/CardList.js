import React, { Component, Fragment } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  StatusBar,
  Text,
} from "react-native";
import Card from "../../views/card/Card.view";
import { inject, observer } from "mobx-react/";
import moviesService from "./../../../services/movies.service";
import { COLORS, LANGUAGE } from "../../../utils/env";

@inject("observableStore")
@observer
export default class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      connectionError: false,
    };
  }
  componentDidMount = () => {
    moviesService
      .getMovies(10)
      .then((movies) => {
        this.props.observableStore.setMovies(movies);
        return movies;
      })
      .then((movies) => {
        moviesService.getMoviesDetails(movies).then((res) => {
          this.props.observableStore.updateMovies(res);
        });
      })
      .catch((error) => {
        this.setState({ connectionError: true });
      });
  };
  render() {
    const { navigation } = this.props;
    const hasError = this.state.connectionError;
    return (
      <View style={styles.container}>
        <StatusBar></StatusBar>
        {hasError ? (
          <Text>
            {LANGUAGE.dictionary.CONNECTION_ERROR[LANGUAGE.SELECTED]}...
          </Text>
        ) : !hasError && !this.props.observableStore.hasMovies ? (
          <ActivityIndicator size="large" color={COLORS.DARK_GREEN} />
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={this.props.observableStore.movies}
            keyExtractor={(item) => item.key.toString()}
            renderItem={({ index, item }) => {
              return (
                <Card
                  key={`${item.key}`}
                  navigation={navigation}
                  index={index}
                  item={item}
                ></Card>
              );
            }}
          ></FlatList>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    alignItems: "center",
    justifyContent: "center",
  },
});
