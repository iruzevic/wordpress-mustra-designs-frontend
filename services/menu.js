export function getMenuService() {
  return fetch('http://dev-api.mustra-designs.com/wp-content/plugins/decoupled-json-content/menu/rest-routes/menu.php', {
    method: 'GET',
  }).then((res) => res.json());
}
