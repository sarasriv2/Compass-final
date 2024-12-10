import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { WeeklyGoalsModalComponent } from '../weekly-goals-modal/weekly-goals-modal.component';
import { HashtagNotesComponent } from '../hashtag-notes/hashtag-notes.component';
import { GoalServiceService } from '../goal.service.service';
interface Goal {
  text: string;
  tag: string;
  isComplete: boolean;
}

@Component({
  selector: 'app-weekly-goals',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCheckboxModule, WeeklyGoalsModalComponent, HashtagNotesComponent],
  templateUrl: './weekly-goals.component.html',
  styleUrls: ['./weekly-goals.component.scss']
})

export class WeeklyGoalsComponent {
  isGoalModalOpen: boolean = false; 
  isNotesModalOpen: boolean = false;
  selectedTag: string | null = null; 
  weeklyGoals: { text: string; tag: string; isComplete: boolean }[] = [];


  constructor(private goalsService: GoalServiceService) {
    this.weeklyGoals = this.goalsService.getGoals();
  }; 

  handleGoalSave(newGoal: { text: string; tag: string; isComplete: boolean }) {
    this.goalsService.addGoal(newGoal); // Save to service
    this.weeklyGoals = this.goalsService.getGoals();
  }

  openModal() {
    this.isGoalModalOpen = true;
  }

  closeModal() {
    this.isGoalModalOpen = false;
  }

  openNotesModal(tag: string): void {
    this.selectedTag = tag;
    this.isNotesModalOpen = true;
  }

  closeNotesModal() {
    this.selectedTag = null;
    this.isNotesModalOpen = false;
  }
 
  getTagStyle(tag: string): string {
    if (tag == "#apply-internships") {
      return "#2DBDB1";
    }
    else if (tag == "#class-algorithms") {
      return "#FFB987";
    }
    else {
      return "purple";
    }
  }

  checkGoal(goal: Goal): void {
    goal.isComplete = !goal.isComplete;
  }

  addGoalFromModal(newGoal: Goal) {
    this.handleGoalSave(newGoal); 
  }
}
