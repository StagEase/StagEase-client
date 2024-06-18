import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private keycloakService: KeycloakService) {}

  async logout() {
    try {
      // Chama o método de logout do KeycloakService
      await this.keycloakService.logout();
      // URL de redirecionamento após o logout
    } catch (error) {
      console.error('Erro ao realizar logout', error);
    }
  }
}
