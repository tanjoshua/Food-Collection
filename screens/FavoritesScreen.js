import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FoodList from "../components/FoodList";
import { MEALS } from "../data/dummydata";

const FavoritesScreen = (props) => {
  const FavoritedFoods = MEALS.filter((meal) => meal.id === "m1");

  return <FoodList navigation={props.navigation} foods={FavoritedFoods} />;
};

const styles = StyleSheet.create({});

export default FavoritesScreen;
