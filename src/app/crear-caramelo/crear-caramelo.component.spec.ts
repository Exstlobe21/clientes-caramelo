import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCarameloComponent } from './crear-caramelo.component';

describe('CrearCarameloComponent', () => {
  let component: CrearCarameloComponent;
  let fixture: ComponentFixture<CrearCarameloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearCarameloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearCarameloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
