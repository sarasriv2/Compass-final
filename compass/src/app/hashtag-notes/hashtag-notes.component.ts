import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeeklyGoalsModalComponent } from "../weekly-goals-modal/weekly-goals-modal.component";
import { GoalServiceService } from '../goal.service.service';
@Component({
  selector: 'app-hashtag-notes',
  standalone: true,
  imports: [CommonModule, FormsModule, WeeklyGoalsModalComponent],
  templateUrl: './hashtag-notes.component.html',
  styleUrl: './hashtag-notes.component.scss'
})
export class HashtagNotesComponent {
  @Input() tag: string | null = null;
  @Input() notes: { title: string; content: string }[] = [
    { title: 'Apply to all internships', content: 'Enter general Notes for this quarter goal...' },
    { title: 'Finish Google Cover letter', content: 'Enter notes for this weekly goal...' },
    { title: 'Apply to Microsoft', content: 'Enter notes for this weekly goal...' },
  ];
  @Input() weeklyGoals: { text: string; tag: string; isComplete: boolean }[] = [
    { text: 'Finish Google Cover Letter', tag: '#apply-internships', isComplete: false },
    { text: 'Apply to Microsoft', tag: '#apply-internships', isComplete: false },
  ];

  @Output() close = new EventEmitter<void>();
  isModalOpen = false;

  constructor(private goalsService: GoalServiceService) {}

  get getweeklyGoal() {
    return this.goalsService.getGoals();
  }
  
  openModal() {
    this.isModalOpen = true;
  }

  
  closeModal() {
    this.isModalOpen = false;
  }



  
  addGoalFromModal(newGoal: { text: string; tag: string; isComplete: boolean }) {
    this.weeklyGoals.push(newGoal);
    this.notes.push({ title: newGoal.text, content: 'Enter notes for this weekly goal...' });
  }

  
  editNoteContent(note: { title: string; content: string }, newContent: string) {
    note.content = newContent;
  }
}



