import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummydata";

const FoodCategoryScreen = (props) => {
  // get category id from Categories screen
  const categoryId = props.navigation.getParam("categoryId");

  // find food that are in this category
  const foodInCategory = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  // function to render meal item
  const renderFoodItem = (itemData) => {
    return (
      <View>
        <Text>{itemData.item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList data={foodInCategory} renderItem={renderFoodItem} />
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
