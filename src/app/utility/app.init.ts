import { KeycloakService } from 'keycloak-angular';
import { environment } from '../environments/environment';

export function initializeKeycloak(
  keycloak: KeycloakService
): () => Promise<boolean> {
  return () =>
    keycloak
      .init({
        config: {
          url: environment.keycloakUrl,
          realm: environment.keycloakRealm,
          clientId: environment.keycloakClientId,
        },
        initOptions: {
          checkLoginIframe: true,
          checkLoginIframeInterval: 25,
        },
      })
      .then((authenticated) => {
        if (authenticated) {
          // Salvar o token no localStorage
          const token = keycloak.getKeycloakInstance().token;
          if (token) {
            localStorage.setItem('jwt_token', token);
            console.log('Token salvo no localStorage:', token);
          }
        }
        return authenticated;
      });
}
