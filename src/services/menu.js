import axios from 'axios';

// Get Account By ID
export default {
  getMenuService() {
    return axios.get(`http://dev-api.mustra-designs.com/wp-content/plugins/decoupled-json-content/menu/rest-routes/menu.php`,)
    .catch((error) => {
      console.log(error, 'error');
    });
  }
}
