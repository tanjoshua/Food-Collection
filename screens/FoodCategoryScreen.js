import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CATEGORIES from "../data/dummydata";

const FoodCategoryScreen = (props) => {
  // get category id from Categories screen
  const categoryId = props.navigation.getParam("categoryId");

  // find category object with this id
  const selectedCategory = CATEGORIES.find(
    (category) => category.id == categoryId
  );

  return (
    <View style={styles.screen}>
      <Text>Categories</Text>
    </View>
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "lightgray",
  },
});

export default FoodCategoryScreen;
