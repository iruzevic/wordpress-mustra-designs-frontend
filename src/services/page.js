import axios from 'axios';

// Get Account By ID
export function getPageService(slug, type) {
  return axios.get(`http://dev-api.mustra-designs.com/wp-content/plugins/decoupled-json-content/page/rest-routes/page.php?slug=${slug}&type=${type}`)
  .catch((error) => {
    console.log(error, 'error');
  });
}
