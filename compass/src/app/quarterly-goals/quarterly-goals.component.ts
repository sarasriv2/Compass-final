import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';

interface Goal {
  text: string;
  tag: string;
  frac: string;
  isComplete: boolean;
}

@Component({
  selector: 'app-quarterly-goals',
  standalone: true,
  imports: [CommonModule, MatCheckboxModule],
  templateUrl: './quarterly-goals.component.html',
  styleUrl: './quarterly-goals.component.scss'
})
export class QuarterlyGoalsComponent {
  isOpen: boolean = false;

  quarterlyGoals: Goal[] = [ 
    {text: "Do well in algorithms class" , tag: "#class-algorithms" , frac: "4 / 5", isComplete: false },
    {text: "Apply to all internships", tag: '#apply-internships', frac: "2 / 3", isComplete: false },
    {text: "Technical interview prep", tag: '#interview-technical', frac: "1 / 2", isComplete: false }
  ];

  getTagStyle(tag: string): string {
    if (tag == "#class-algorithms") {
      return "#FFB987";
    }
    else if (tag == "#apply-internships") {
      return "#2DBDB1";
    }
    else if (tag == "#interview-technical") {
      return "#EE8B72";
    }
    else{
      return "purple";
    }
  }

  checkGoal(goal: Goal): void {
    goal.isComplete = !goal.isComplete;
  }

}
