// environment.ts

export const environment = {
  production: true,
  keycloakUrl: process.env['KEYCLOAK_URL'] || 'http://localhost:9090',
  keycloakRealm: process.env['KEYCLOAK_REALM'] || 'test',
  keycloakClientId: process.env['KEYCLOAK_CLIENT_ID'] || 'keycloak',
};
