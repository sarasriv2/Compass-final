import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongTermGoalsModalComponent } from './long-term-goals-modal.component';

describe('LongTermGoalsModalComponent', () => {
  let component: LongTermGoalsModalComponent;
  let fixture: ComponentFixture<LongTermGoalsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LongTermGoalsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LongTermGoalsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
