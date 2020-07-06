import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FoodList from "../components/FoodList";
import { useSelector } from "react-redux";

const FavoritesScreen = (props) => {
  const favoritedFoods = useSelector((state) => state.food.favoriteFoods);

  return <FoodList navigation={props.navigation} foods={favoritedFoods} />;
};

const styles = StyleSheet.create({});

export default FavoritesScreen;
