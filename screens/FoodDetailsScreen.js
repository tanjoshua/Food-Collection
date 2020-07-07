import React, { useEffect } from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { toggleFavorite } from "../store/actions/foodActions";

const FoodDetailsScreen = (props) => {
  const foodId = props.navigation.getParam("mealId");
  const availableFood = useSelector((state) => state.food.food);
  const isFavorite = useSelector((state) =>
    state.food.favoriteFoods.some((item) => item.id === foodId)
  );
  const selectedFood = availableFood.find((meal) => meal.id === foodId);

  // get dispatch function from redux
  const dispatch = useDispatch();

  // handler for favorite toggle
  const toggleFavoriteHandler = () => {
    dispatch(toggleFavorite(foodId));
  };

  // send above handler to navigation
  useEffect(() => {
    props.navigation.setParams({ toggleHandler: toggleFavoriteHandler });
  }, [selectedFood]);

  // send isFavorite to navigation
  useEffect(() => {
    props.navigation.setParams({ isFavorite: isFavorite });
  }, [isFavorite]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedFood.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text>{selectedFood.duration} minutes</Text>
        <Text>{selectedFood.complexity}</Text>
        <Text>{selectedFood.affordability}</Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedFood.ingredients.map((ingredient) => (
        <View style={styles.listItem} key={ingredient}>
          <Text>{ingredient}</Text>
        </View>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedFood.steps.map((step) => (
        <View style={styles.listItem} key={step}>
          <Text>{step}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

// set header title
FoodDetailsScreen.navigationOptions = (navigationData) => {
  // get toggle favorite function from navigation
  const toggleFavorite = navigationData.navigation.getParam("toggleHandler");
  // get isFavorite from navigation
  const isFavorite = navigationData.navigation.getParam("isFavorite");

  return {
    headerTitle: navigationData.navigation.getParam("mealTitle"),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName={isFavorite ? "ios-star" : "ios-star-outline"}
          onPress={toggleFavorite}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  image: {
    height: 250,
    width: "100%",
  },
  details: {
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
  },
  listItem: {
    marginLeft: 10,
  },
});

export default FoodDetailsScreen;
