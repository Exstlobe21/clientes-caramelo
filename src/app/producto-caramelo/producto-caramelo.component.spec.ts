import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoCarameloComponent } from './producto-caramelo.component';

describe('ProductoCarameloComponent', () => {
  let component: ProductoCarameloComponent;
  let fixture: ComponentFixture<ProductoCarameloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductoCarameloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductoCarameloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
