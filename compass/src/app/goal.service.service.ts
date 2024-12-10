import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoalServiceService {
  private weeklyGoals = [
    { text: "Finish Google cover letter", tag: '#apply-internships', isComplete: false },
    { text: "Apply to Microsoft", tag: '#apply-internships', isComplete: false },
    { text: "Practice implementing data structures", tag: '#class-algorithms', isComplete: false }
  ];

  getGoals() {
    return [...this.weeklyGoals];
  }

  addGoal(goal: { text: string; tag: string; isComplete: boolean }) {
    this.weeklyGoals.push(goal);
  }
}

