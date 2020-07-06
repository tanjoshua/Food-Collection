// favorites and filters
import { MEALS } from "../../data/dummydata";

// initialized state
const initialState = {
  food: MEALS,
  filteredFoods: MEALS,
  favoriteFoods: [],
};

// set to initialState for the first time
const foodReducer = (state = initialState, action) => {
  // handle toggle favorites
  switch (action.type) {
    case "TOGGLE_FAVORITE":
      // check if item is in favorites
      const index = state.favoriteFoods.findIndex(
        (meal) => meal.id === action.foodId
      );
      if (index >= 0) {
        // in favorites -> remove
        const updatedFavoriteFoods = [...state.favoriteFoods];
        updatedFavoriteFoods.splice(index, 1);
        return { ...state, favoriteFoods: updatedFavoriteFoods };
      } else {
        // not in favorites -> add
        return {
          ...state,
          favoriteFoods: state.favoriteFoods.concat(
            state.food.find((meal) => meal.id === action.foodId)
          ),
        };
      }
    default:
      return state;
  }

  return state;
};

export default foodReducer;
