import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch } from "react-redux";
import { setFilters } from "../store/actions/foodActions";
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";

//component for filter switch
const FilterSwitch = (props) => {
  return (
    <View style={styles.filters}>
      <Text>{props.children}</Text>
      <Switch
        trackColor={{ true: Colors.primaryColor }}
        thumbColor={Colors.accentColor}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

// screen
const FiltersScreen = (props) => {
  // destructer to get navigation
  // we do this so we can call the useEffect when navigation is changed
  // prevents infinite loop for useEffect
  const { navigation } = props;

  //state for filters
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  // dispatch function
  const dispatch = useDispatch();

  // save filters function
  // useCallback only runs if the dependencies specified are changed - prevent infinite loop
  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegatarian: isVegetarian,
    };
    dispatch(setFilters(appliedFilters));
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  // set filters with setParams (pass to header)
  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  // return jsx
  return (
    <View>
      <Text style={styles.title}>Available Filters</Text>
      <FilterSwitch
        state={isGlutenFree}
        onChange={(newValue) => setIsGlutenFree(newValue)}
      >
        Gluten-free
      </FilterSwitch>
      <FilterSwitch
        state={isLactoseFree}
        onChange={(newValue) => setIsLactoseFree(newValue)}
      >
        Lactose-free
      </FilterSwitch>
      <FilterSwitch
        state={isVegan}
        onChange={(newValue) => setIsVegan(newValue)}
      >
        Vegan
      </FilterSwitch>
      <FilterSwitch
        state={isVegetarian}
        onChange={(newValue) => setIsVegetarian(newValue)}
      >
        Vegetarian
      </FilterSwitch>
    </View>
  );
};

FiltersScreen.navigationOptions = (navData) => {
  return {
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
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-save"
          onPress={
            // call save filters function
            navData.navigation.getParam("save")
          }
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    margin: 10,
    textAlign: "center",
  },
  filters: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%",
    alignSelf: "center",
    marginVertical: 10,
  },
});

export default FiltersScreen;
