export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";

// action for favoriting foods
export const toggleFavorite = (id) => {
  return { type: "TOGGLE_FAVORITE", foodId: id };
};

// action for setting filters
export const setFilters = (filterSettings) => {
  return {
    type: "SET_FILTERS",
    filters: filterSettings,
  };
};
