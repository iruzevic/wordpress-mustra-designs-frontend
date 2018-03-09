import axios from 'axios';

export function getPageService(slug, type) {
  return axios.get(`http://dev-api.mustra-designs.com/wp-content/plugins/decoupled-json-content/page/rest-routes/page.php?slug=${slug}&type=${type}`)
    .then(response => response.data,
  ).catch(() => {
    throw new Error("Error connecting to Page API!");
  });
}
