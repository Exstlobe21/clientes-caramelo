import { TestBed } from '@angular/core/testing';

import { CarameloService } from './caramelo.service';

describe('CarameloService', () => {
  let service: CarameloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarameloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
