import { KeycloakService } from 'keycloak-angular';

export function initializeKeycloak(
  keycloak: KeycloakService
): () => Promise<boolean> {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:9090',
        realm: 'test',
        clientId: 'keycloak',
      },
      initOptions: {
        checkLoginIframe: true,
        checkLoginIframeInterval: 25,
      },
    });
}
