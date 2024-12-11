import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { QuarterlyGoalsModalComponent } from '../quarterly-goals-modal/quarterly-goals-modal.component';

interface Goal {
  text: string;
  tag: string;
  frac: string;
  isComplete: boolean;
}

@Component({
  selector: 'app-quarterly-goals',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCheckboxModule, QuarterlyGoalsModalComponent],
  templateUrl: './quarterly-goals.component.html',
  styleUrls: ['./quarterly-goals.component.scss']
})
export class QuarterlyGoalsComponent {
  isOpen: boolean = false;
  quarterlyGoals: Goal[] = [ 
    { text: "Do well in algorithms class" , tag: "#class-algorithms" , frac: "4 / 5", isComplete: false },
    { text: "Apply to all internships", tag: '#apply-internships', frac: "2 / 3", isComplete: false },
    { text: "Technical interview prep", tag: '#interview-technical', frac: "1 / 2", isComplete: false }
  ];

  openModal() {
    this.isOpen = true;
  }

  closeModal() {
    this.isOpen = false;
    this.quarterlyGoals = [...this.quarterlyGoals];
  }

  getTagStyle(tag: string): string {
    switch (tag) {
      case "#class-algorithms":
        return "#FFB987";
      case "#apply-internships":
        return "#2DBDB1";
      case "#interview-technical":
        return "#EE8B72";
      default:
        return "purple";
    }
  }

  checkGoal(goal: Goal): void {
    goal.isComplete = !goal.isComplete;
  }
}
