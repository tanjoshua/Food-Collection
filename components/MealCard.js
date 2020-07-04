import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const MealCard = (props) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={props.onPress}>
        <View>
          <View style={{ ...styles.mealSection, ...styles.header }}>
            <ImageBackground source={{ uri: props.image }} style={styles.image}>
              <Text style={styles.title}>{props.title}</Text>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealSection, ...styles.details }}>
            <Text>{props.duration} minutes</Text>
            <Text>{props.complexity}</Text>
            <Text>{props.affordability}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "lightgray",
    padding: 20,
  },
  mealSection: {
    flexDirection: "row",
  },
  header: {},
  details: {
    padding: 20,
    justifyContent: "space-between",
  },
  image: {
    height: 170,
    width: "100%",
    justifyContent: "flex-end",
  },
  title: {
    color: "white",
    backgroundColor: "rgba(0,0,0,0.7)",
    padding: 10,
  },
});

export default MealCard;
