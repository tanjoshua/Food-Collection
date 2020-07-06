# Food Collection App

Personal project to familiarize myself with navigation & redux within a React Native application.

# Some notes (for my own use)

1. navigate/push, pop/goBack, popToTop (back to root), replace (new stack - no back)
2. passing parameters between screens
3. setting navigation options to edit header styling - both in a function and as an object
4. use ImageBackground from react-native to implement background images
5. use react-navigation-header-buttons to add buttons to headers
6. use react-navigation-tabs to create a navigation tab - tabBarOptions to style navigation bar and navigationOptions in constructor to add icons
7. nest stack navigator in tab navigator for organization of pages
8. Additional navigation: drawer navigator - use navigationOptions to create the hamburger button
9. Switch component - change colors using trackColor & thumbColor
10. Communicate with header on the same page using navigation.setParams

# Redux notes

1. Create a reducer with a state
2. In App.js, combine reducers using combineReducers
3. Create a storage using createStore
4. Wrap jsx with Provider component with store assigned
5. To retrieve stuff in a component: useSelector
