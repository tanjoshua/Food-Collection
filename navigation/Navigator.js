import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";

// importing screens
import CategoriesScreen from "../screens/CategoriesScreen";
import FoodCategoryScreen from "../screens/FoodCategoryScreen";
import FoodDetailsScreen from "../screens/FoodDetailsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";

// import colors
import Colors from "../constants/Colors";

// stack navigator - forward backward flow
const FoodNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    FoodCategory: FoodCategoryScreen,
    FoodDetails: FoodDetailsScreen,
  },
  {
    // can set other stuff, like initial route and mode (eg. modal)

    // setting default navigation options
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primaryColor,
      },
      headerTintColor: Colors.accentColor,
    },
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    Categories: {
      screen: FoodNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="ios-restaurant"
              size={25}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
    Favorites: {
      screen: FavoritesScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.accentColor,
    },
  }
);

export default createAppContainer(TabNavigator);
