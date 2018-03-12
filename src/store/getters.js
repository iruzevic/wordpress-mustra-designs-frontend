const getCurrentPage = (state) => (slug) => {
  return state.pages[slug];
};

const getMenu = (state) => {
  return state.menu;
};

const getMenuItems = (state) => {
  return state.menuItems;
};

// const getThemeOptions = (state) => {
//   return state.themeOptions;
// };


export { getMenu, getMenuItems, getCurrentPage };
