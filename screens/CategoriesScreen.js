import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import CATEGORIES from "../data/dummydata";
import Colors from "../constants/Colors";

const CategoriesScreen = (props) => {
  // function to render each item
  // placed in component to have access to props navigation
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate({
            routeName: "FoodCategory",
            params: {
              categoryId: itemData.item.id, // pass on params to next screen
            },
          })
        }
        style={styles.gridItem}
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

// add property to function - function are also objects in js
CategoriesScreen.navigationOptions = {
  headerTitle: "Food Categories",
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
  },
});

export default CategoriesScreen;
