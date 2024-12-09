import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuarterlyGoalsModalComponent } from './quarterly-goals-modal.component';

describe('QuarterlyGoalsModalComponent', () => {
  let component: QuarterlyGoalsModalComponent;
  let fixture: ComponentFixture<QuarterlyGoalsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuarterlyGoalsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuarterlyGoalsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
