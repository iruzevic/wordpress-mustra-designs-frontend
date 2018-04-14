import fetch from 'isomorphic-fetch';

const dev = process.env.NODE_ENV !== 'production';

export function getPageService(slug, type) {
  const apiEndpoint = 'http://dev-api.mustra-designs.com';
  return fetch(`${apiEndpoint}/wp-content/plugins/decoupled-json-content/page/rest-routes/page.php?slug=${slug}&type=${type}`, {
    method: 'GET',
  }).then((res) => res.json());
}
