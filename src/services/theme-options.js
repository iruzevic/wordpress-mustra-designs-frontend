import axios from 'axios';

// Get Account By ID
export function getThemeOptionsService() {
  return axios.get(`http://dev-api.mustra-designs.com/wp-content/plugins/mustra-designs/rest-routes/theme-options.php`,)
    .then(response => response.data,
  ).catch(() => {
    throw new Error("Error connecting to Theme Options API!");
  });
}
