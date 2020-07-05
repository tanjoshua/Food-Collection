import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Ionicons } from "@expo/vector-icons";

// importing screens
import CategoriesScreen from "../screens/CategoriesScreen";
import FoodCategoryScreen from "../screens/FoodCategoryScreen";
import FoodDetailsScreen from "../screens/FoodDetailsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";

// import colors
import Colors from "../constants/Colors";

// default options for stack navigation
const stackDefaultOptions = {
  headerStyle: {
    backgroundColor: Colors.primaryColor,
  },
  headerTintColor: Colors.accentColor,
};

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
    defaultNavigationOptions: stackDefaultOptions,
  }
);

// stack navigator for favorites
const FavoriteNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    FoodDetails: FoodDetailsScreen,
  },
  {
    defaultNavigationOptions: stackDefaultOptions,
  }
);

// create tab navigator
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
      screen: FavoriteNavigator,
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
      inactiveTintColor: "lightgray",
      tabStyle: {
        backgroundColor: Colors.primaryColor,
      },
    },
  }
);

// stack navigator for filter
const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen,
  },
  {
    defaultNavigationOptions: stackDefaultOptions,
  }
);

// create main drawer navigator
const MainNavigator = createDrawerNavigator(
  {
    Food: TabNavigator,
    Filters: FiltersNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
    },
  }
);

export default createAppContainer(MainNavigator);
