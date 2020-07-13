import React, { Component, Fragment } from "react";
import { FlatList, Dimensions, StatusBar } from "react-native";
import Details from "../../views/details/Details.view";
import { inject, observer } from "mobx-react/";
import { getWindowAndScreenDimensions } from "../../../utils/helpers";

@inject("observableStore")
@observer
export default class DetailsList extends Component {
  render() {
    const { windowWidth } = getWindowAndScreenDimensions();
    return (
      <Fragment>
        <StatusBar></StatusBar>
        <FlatList
          horizontal={true}
          pagingEnabled={true}
          nestedScrollEnabled={true}
          keyExtractor={(item) => item.key.toString()}
          getItemLayout={(data, index) => ({
            length: windowWidth,
            offset: windowWidth * index,
            index,
          })}
          maxToRenderPerBatch={4}
          initialNumToRender={2}
          data={this.props.observableStore.getMovies}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <Details
              title={item.title}
              releaseDate={item.releaseDate}
              voteRate={item.voteRate}
              description={item.description}
              genres={item.genres}
              credits={item.credits}
              imageURL={item.imageURL}
            ></Details>
          )}
          initialScrollIndex={this.props.route.params.index}
        ></FlatList>
      </Fragment>
    );
  }
}
