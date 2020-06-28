import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

// importing screens
import CategoriesScreen from "../screens/CategoriesScreen";
import FoodCategoryScreen from "../screens/FoodCategoryScreen";
import FoodDetailsScreen from "../screens/FoodDetailsScreen";

const FoodNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  FoodCategory: FoodCategoryScreen,
  FoodDetails: FoodDetailsScreen,
});

export default createAppContainer(FoodNavigator);
