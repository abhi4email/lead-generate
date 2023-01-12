import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepThirdComponent } from './step-third.component';

describe('StepThirdComponent', () => {
  let component: StepThirdComponent;
  let fixture: ComponentFixture<StepThirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepThirdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
