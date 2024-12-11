import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { LongTermGoalsModalComponent } from '../long-term-goals-modal/long-term-goals-modal.component';
import { LongTermNotesComponent } from '../long-term-notes/long-term-notes.component';

interface Goal {
  text: string;
  isComplete: boolean;
}

@Component({
  selector: 'app-long-term-goals',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCheckboxModule, LongTermGoalsModalComponent, LongTermNotesComponent],
  templateUrl: './long-term-goals.component.html',
  styleUrls: ['./long-term-goals.component.scss']
})
export class LongTermGoalsComponent {
  isOpen: boolean = false;
  isNotesModalOpen: boolean = false;

  longtermGoals1Year: Goal[] = [
    { text: "Secure SWE or UX Engineering Internship", isComplete: false },
  ];

  longtermGoals5Year: Goal[] = [
    { text: "Working as a SWE in a team I love with some UX/Design oriented work", isComplete: false },
  ];

  openModal() {
    this.isOpen = true;
    console.log("Modal opened");
  }

  closeModal() {
    this.isOpen = false;
    console.log("Modal closed");
  }
  
  openNotesModal(): void {
    this.isNotesModalOpen = true;
  }

  closeNotesModal() {
    this.isNotesModalOpen = false;
  }

  updateGoals(updatedGoals: { oneYear: Goal[]; fiveYear: Goal[] }) {
  this.longtermGoals1Year = updatedGoals.oneYear.map(goal => ({
    text: goal.text.replace('1 year ', ''),
    isComplete: goal.isComplete,
  }));

  this.longtermGoals5Year = updatedGoals.fiveYear.map(goal => ({
    text: goal.text.replace('5 year ', ''),
    isComplete: goal.isComplete,
  }));
}
  
}
