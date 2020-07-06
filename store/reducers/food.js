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
  return state;
};

export default foodReducer;
