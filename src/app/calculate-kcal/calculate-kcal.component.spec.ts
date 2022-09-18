import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateKcalComponent } from './calculate-kcal.component';

describe('CalculateKcalComponent', () => {
  let component: CalculateKcalComponent;
  let fixture: ComponentFixture<CalculateKcalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculateKcalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateKcalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
