import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FoodList from "../components/FoodList";
import { useSelector } from "react-redux";

const FavoritesScreen = (props) => {
  const favoritedFoods = useSelector((state) => state.food.favoriteFoods);

  if (favoritedFoods.length === 0 || !favoritedFoods) {
    return (
      <View style={styles.message}>
        <Text>No favorited food found</Text>
      </View>
    );
  }
  return <FoodList navigation={props.navigation} foods={favoritedFoods} />;
};

const styles = StyleSheet.create({
  message: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
