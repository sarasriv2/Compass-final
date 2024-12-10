import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-hashtag-notes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hashtag-notes.component.html',
  styleUrl: './hashtag-notes.component.scss'
})
export class HashtagNotesComponent {
  @Input() tag: string | null = null;
  @Input() notes: { title: string; content: string }[] = [
    { title: ' Apply to all internships' , content: 'Enter general Notes for this quarter goal...'}, 
    { title: 'Finish Google Cover letter' , content: 'Enter notes for this weekly goal...'}, 
    { title: 'Apply to Microsoft' , content: 'Enter notes for this weekly goal...'}, 
    
  ]
  @Input() weeklyGoals: { text: string; isComplete: boolean }[] = [
    {text: 'Finish Google Cover Letter' , isComplete: false },
    {text: 'Apply to Microsoft' , isComplete: false }
    
  ];
  @Output() close = new EventEmitter<void>(); 

  closeModal() {
    this.close.emit(); 
  }
  checkGoal(goal: { text: string, isComplete: boolean }) {
    goal.isComplete = !goal.isComplete;
  }

  addGoal() {
    console.log('Add new goal');
  }
}



