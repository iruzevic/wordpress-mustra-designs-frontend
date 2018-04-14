export function getPageService(slug, type) {
  return fetch('http://dev-api.mustra-designs.com/wp-content/plugins/mustra-designs/rest-routes/theme-options.php', {
    method: 'GET',
  }).then((res) => res.json());
}
