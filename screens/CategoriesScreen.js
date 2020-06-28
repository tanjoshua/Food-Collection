import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CategoriesScreen = (props) => {
  return (
    <View>
      <Button
        onPress={() => props.navigation.navigate("FoodCategory")}
        title="Go to Food Category"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CategoriesScreen;
