import { TestBed } from '@angular/core/testing';

import { UbsService } from './equipamento.service';

describe('UbsService', () => {
  let service: UbsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UbsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
