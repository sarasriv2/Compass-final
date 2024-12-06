import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuarterlyGoalsComponent } from './quarterly-goals.component';

describe('QuarterlyGoalsComponent', () => {
  let component: QuarterlyGoalsComponent;
  let fixture: ComponentFixture<QuarterlyGoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuarterlyGoalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuarterlyGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
