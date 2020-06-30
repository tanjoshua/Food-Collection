import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

// importing screens
import CategoriesScreen from "../screens/CategoriesScreen";
import FoodCategoryScreen from "../screens/FoodCategoryScreen";
import FoodDetailsScreen from "../screens/FoodDetailsScreen";

// import colors
import Colors from "../constants/Colors";

const FoodNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    FoodCategory: FoodCategoryScreen,
    FoodDetails: FoodDetailsScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primaryColor,
      },
      headerTintColor: Colors.accentColor,
    },
  }
);

export default createAppContainer(FoodNavigator);
