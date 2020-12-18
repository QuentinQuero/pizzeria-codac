import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaRowSelectionComponent } from './pizza-row-selection.component';

describe('PizzaRowSelectionComponent', () => {
  let component: PizzaRowSelectionComponent;
  let fixture: ComponentFixture<PizzaRowSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaRowSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaRowSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
