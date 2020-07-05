import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { CATEGORIES } from "../data/dummydata";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

//import component
import CategoryCard from "../components/CategoryCard";

const CategoriesScreen = (props) => {
  // function to render each item
  // placed in component to have access to props navigation
  const renderGridItem = (itemData) => {
    return (
      <CategoryCard
        title={itemData.item.title}
        onPress={() =>
          props.navigation.navigate({
            routeName: "FoodCategory",
            params: {
              categoryId: itemData.item.id, // pass on params to next screen
            },
          })
        }
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
      style={styles.screen}
    />
  );
};

// add property to function - function are also objects in js
CategoriesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Food Categories",
    // create hamburger menu
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
  },
  screen: {
    backgroundColor: "lightgray",
  },
});

export default CategoriesScreen;
