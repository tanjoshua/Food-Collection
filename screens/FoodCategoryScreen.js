import React from "react";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummydata";

import FoodList from "../components/FoodList";

const FoodCategoryScreen = (props) => {
  // get category id from Categories screen
  const categoryId = props.navigation.getParam("categoryId");

  // get food data from redux
  const availableFood = useSelector((state) => state.food.filteredFoods);

  // find food that are in this category
  const foodInCategory = availableFood.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return (
    // forward data list and navigation prop
    <FoodList foods={foodInCategory} navigation={props.navigation} />
  );
};

// navigationOptions can also be a function
FoodCategoryScreen.navigationOptions = (navigationData) => {
  // get category id from Categories screen (previous screen)
  const categoryId = navigationData.navigation.getParam("categoryId");

  // find category object with this id
  const selectedCategory = CATEGORIES.find(
    (category) => category.id == categoryId
  );

  // set up options - return options object
  return {
    headerTitle: selectedCategory.title,
  };
};

export default FoodCategoryScreen;
