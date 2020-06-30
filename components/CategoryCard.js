import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const CategoryCard = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.gridItem}>
      <View style={styles.card}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
  },
  card: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    padding: 30,
    alignItems: "center",
    backgroundColor: Colors.primaryColor,
  },
  title: {
    color: Colors.accentColor,
  },
});

export default CategoryCard;
