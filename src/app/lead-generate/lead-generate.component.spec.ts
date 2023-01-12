import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadGenerateComponent } from './lead-generate.component';

describe('LeadGenerateComponent', () => {
  let component: LeadGenerateComponent;
  let fixture: ComponentFixture<LeadGenerateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadGenerateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
