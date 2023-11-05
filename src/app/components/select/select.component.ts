import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
  selectedOption: string | null = null;
  selectedOptionText: string = '';
  options = [
    { label: 'Area', value: 'option1', route: 'area' },
    { label: 'Supervisor', value: 'option2', route: 'supervisor' },
    { label: 'Equipamento', value: 'option3', route: 'equipamento' },
    { label: 'IE', value: 'option4', route: 'ie' },
  ];
  isActive = false;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    // Use o ActivatedRoute para obter o segmento da rota após "controle/"
    this.route.url
      .pipe(
        filter((segments) => segments.length > 0),
        map((segments) => segments[segments.length - 1].path)
      )
      .subscribe((segment) => {
        const matchingOption = this.options.find(
          (option) => option.route === segment
        );
        if (matchingOption) {
          this.selectedOption = matchingOption.route;
          this.selectedOptionText = matchingOption.label;
        }
      });
  }

  toggleDropdown(event: Event) {
    event.stopPropagation();
    this.isActive = !this.isActive;
  }

  selectOption(option: any) {
    this.selectedOption = option.route;
    this.selectedOptionText = option.label;
    this.isActive = false;

    // Navegue para a rota completa incluindo "controle/"
    this.router.navigate(['controle', option.route]);
  }
}
