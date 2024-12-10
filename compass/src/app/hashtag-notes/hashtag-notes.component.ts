import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeeklyGoalsModalComponent } from "../weekly-goals-modal/weekly-goals-modal.component";
@Component({
  selector: 'app-hashtag-notes',
  standalone: true,
  imports: [CommonModule, FormsModule, WeeklyGoalsModalComponent],
  templateUrl: './hashtag-notes.component.html',
  styleUrl: './hashtag-notes.component.scss'
})
export class HashtagNotesComponent {
closeModalFromChild() {
throw new Error('Method not implemented.');
}
addGoal($event: { text: string; isComplete: boolean; }) {
throw new Error('Method not implemented.');
}
  @Input() tag: string | null = null;
  @Input() notes: { title: string; content: string }[] = [
    { title: 'Apply to all internships', content: 'Enter general Notes for this quarter goal...' },
    { title: 'Finish Google Cover letter', content: 'Enter notes for this weekly goal...' },
    { title: 'Apply to Microsoft', content: 'Enter notes for this weekly goal...' },
  ];
  @Input() weeklyGoals: { text: string; isComplete: boolean }[] = [
    { text: 'Finish Google Cover Letter', isComplete: false },
    { text: 'Apply to Microsoft', isComplete: false },
  ];

  @Output() close = new EventEmitter<void>();

  isModalOpen = false;

  // Opens the modal
  openModal() {
    this.isModalOpen = true;
  }

  // Closes the modal
  closeModal() {
    this.isModalOpen = false;
  }

  // Adds a goal from the modal to weeklyGoals and reflects it in notes
  addGoalFromModal(newGoal: { text: string; tag: string; isComplete: boolean }) {
    this.weeklyGoals.push(newGoal);
    this.notes.push({ title: newGoal.text, content: 'Enter notes for this weekly goal...' });
  }

  // Allows inline editing of note content
  editNoteContent(note: { title: string; content: string }, newContent: string) {
    note.content = newContent;
  }
}



