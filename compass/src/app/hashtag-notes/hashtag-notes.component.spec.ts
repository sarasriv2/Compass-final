import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HashtagNotesComponent } from './hashtag-notes.component';

describe('HashtagNotesComponent', () => {
  let component: HashtagNotesComponent;
  let fixture: ComponentFixture<HashtagNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HashtagNotesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HashtagNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
