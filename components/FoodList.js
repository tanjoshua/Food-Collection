import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import MealCard from "./MealCard";
import { useSelector } from "react-redux";

const FoodList = (props) => {
  // get favorite foods
  const favoritedFood = useSelector((state) => state.food.favoriteFoods);

  // function to render meal item
  const renderFoodItem = (itemData) => {
    const isFavorite = favoritedFood.some(
      (food) => food.id === itemData.item.id
    );
    return (
      <View>
        <MealCard
          title={itemData.item.title}
          duration={itemData.item.duration}
          complexity={itemData.item.complexity}
          affordability={itemData.item.affordability}
          image={itemData.item.imageUrl}
          onPress={() => {
            props.navigation.navigate({
              routeName: "FoodDetails",
              params: {
                mealId: itemData.item.id,
                mealTitle: itemData.item.title,
                isFavorite: isFavorite,
              },
            });
          }}
        />
      </View>
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.foods}
        renderItem={renderFoodItem}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: "lightgray",
  },
  list: {
    width: "100%",
  },
});

export default FoodList;
