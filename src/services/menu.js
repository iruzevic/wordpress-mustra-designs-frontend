import axios from 'axios';

// Get Account By ID
export function getMenuService() {
  return axios.get(`http://dev-api.mustra-designs.com/wp-content/plugins/decoupled-json-content/menu/rest-routes/menu.php`,)
  .then(response => response.data,
  ).catch(() => {
    throw new Error("Error connecting to Menu API!");
  });
}
