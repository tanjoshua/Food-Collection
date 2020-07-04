import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MEALS } from "../data/dummydata";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const FoodDetailsScreen = (props) => {
  const foodId = props.navigation.getParam("mealId");
  return (
    <View>
      <Text>Categories</Text>
    </View>
  );
};

// set header title
FoodDetailsScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return {
    headerTitle: selectedMeal.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Favorite" iconName="ios-star" onPress={() => {}} />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({});

export default FoodDetailsScreen;
