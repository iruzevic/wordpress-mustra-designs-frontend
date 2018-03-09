const getMenuItems = (state) => {
  return state.menuItems;
};

const getMenu = (state) => {
  return state.menu;
};

const getThemeOptions = (state) => {
  return state.themeOptions;
};

const menuFetchStatus = (state) => {
  console.log( state.menuFetchStatus, 'ggetter');
  return state.menuFetchStatus;
};


export { getMenuItems, getMenu, getThemeOptions, menuFetchStatus };
