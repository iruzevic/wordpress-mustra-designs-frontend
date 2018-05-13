export const isBrowser = typeof window !== 'undefined';
export const isServer = !isBrowser;

export const isProduction = process.env.NODE_ENV === 'production';

export const apiEndpoint = isProduction ? 'https://api.mustra-designs.com/wp-content/plugins/decoupled-json-content/' : 'http://dev-api.mustra-designs.com/wp-content/plugins/decoupled-json-content/';
export const apiEndpointMustra = isProduction ? 'https://api.mustra-designs.com/wp-content/plugins/mustra-designs/' : 'http://dev-api.mustra-designs.com/wp-content/plugins/mustra-designs/';

