import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituicaoModalComponent } from './instituicao-modal.component';

describe('InstituicaoModalComponent', () => {
  let component: InstituicaoModalComponent;
  let fixture: ComponentFixture<InstituicaoModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstituicaoModalComponent]
    });
    fixture = TestBed.createComponent(InstituicaoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
