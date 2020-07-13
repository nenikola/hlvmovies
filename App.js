import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CardList from "./components/containers/CardList/CardList";
import DetailsList from "./components/containers/DetailsList/DetailsList";
import { Provider } from "mobx-react";
import observableStore from "./mobx-store/store.js";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Provider observableStore={observableStore}>
        <Stack.Navigator>
          <Stack.Screen
            name="CardList"
            component={CardList}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DetailsList"
            component={DetailsList}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
