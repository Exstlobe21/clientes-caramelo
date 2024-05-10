import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCarameloComponent } from './ver-caramelo.component';

describe('VerCarameloComponent', () => {
  let component: VerCarameloComponent;
  let fixture: ComponentFixture<VerCarameloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerCarameloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerCarameloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
