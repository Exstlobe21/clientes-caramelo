import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarCarameloComponent } from './actualizar-caramelo.component';

describe('ActualizarCarameloComponent', () => {
  let component: ActualizarCarameloComponent;
  let fixture: ComponentFixture<ActualizarCarameloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActualizarCarameloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActualizarCarameloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
