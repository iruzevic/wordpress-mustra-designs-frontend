import axios from 'axios';

// Get Account By ID
export default {
  getThemeOptions() {
    return axios.get(`http://dev-api.mustra-designs.com/wp-content/plugins/mustra-designs/rest-routes/theme-options.php`,)
    .catch((error) => {
      console.log(error, 'error');
    });
  }
}
