import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

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

const TabNavigator = createBottomTabNavigator({
  Categories: FoodNavigator,
  Favorites: FavoritesScreen,
});

export default createAppContainer(TabNavigator);
