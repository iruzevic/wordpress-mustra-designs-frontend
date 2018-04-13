export function getPageService(slug, type) {
  return fetch(`http://dev-api.mustra-designs.com/wp-content/plugins/decoupled-json-content/page/rest-routes/page.php?slug=${slug}&type=${type}`, {
    method: 'GET',
  }).then((res) => res.json());
}
