import { Component, inject } from '@angular/core';
import { Supervisor } from 'src/app/models/supervisor';
import { SupervisorService } from 'src/app/services/supervisor.service';

@Component({
  selector: 'app-supervisor-modal',
  templateUrl: './supervisor-modal.component.html',
  styleUrls: ['./supervisor-modal.component.scss']
})
export class SupervisorModalComponent {

  supervisor: Supervisor = new Supervisor();

  supervisorService = inject(SupervisorService);

  save() {
    this.supervisorService
      .create(this.supervisor)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    location.reload();
  }
}
