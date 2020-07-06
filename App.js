import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { enableScreens } from "react-native-screens";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

// import navigator component
import Navigator from "./navigation/Navigator";
import foodReducer from "./store/reducers/food";

// performance optimization for screen navigation
enableScreens();

// combine reducers
const rootReducer = combineReducers({
  food: foodReducer,
});
// create storage
const store = createStore(rootReducer);

export default function App() {
  // wrap everything with provider
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
