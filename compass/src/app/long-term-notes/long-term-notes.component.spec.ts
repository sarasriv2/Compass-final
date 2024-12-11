import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongTermNotesComponent } from './long-term-notes.component';

describe('LongTermNotesComponent', () => {
  let component: LongTermNotesComponent;
  let fixture: ComponentFixture<LongTermNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LongTermNotesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LongTermNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
