import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { QuarterlyGoalsModalComponent } from '../quarterly-goals-modal/quarterly-goals-modal.component'; 

interface Goal {
  text: string;
  tag: string;
  isComplete: boolean;
  frac?: string; 
}

@Component({
  selector: 'app-quarterly-goals-comp',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSelectModule, QuarterlyGoalsModalComponent], // Add the modal component here
  templateUrl: './quarterly-goals.component.html',
  styleUrls: ['./quarterly-goals.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class QuarterlyGoalsComponent implements OnChanges {
  newGoalText: string = '';
  newGoalTag: string = '';
  isEditing: boolean = false;

  @Input() impGoals: Goal[] = [];
  @Output() close = new EventEmitter<void>();
  @Output() saved = new EventEmitter<Goal>();
  isOpen: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['quarterlyGoals'] && changes['quarterlyGoals'].currentValue) {
      this.impGoals = structuredClone(this.impGoals);
    }
  }

  get uniqueTags(): string[] {
    return Array.from(new Set(this.impGoals.map(goal => goal.tag)));
  }

  getTagStyle(tag: string): string {
    if (tag === "#apply-internships") {
      return "#2DBDB1";
    } else if (tag === "#class-algorithms") {
      return "#FFB987";
    } else {
      return "purple";
    }
  }

  updateNewGoalText(event: Event) {
    const target = event.target as HTMLElement;
    this.newGoalText = target.innerText;
  }

  updateNewGoalTag(event: Event) {
    const target = event.target as HTMLElement;
    this.newGoalTag = target.innerText;
  }

  checkGoal(goal: Goal) {
    goal.isComplete = !goal.isComplete;
  }

  onEnter(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      const newGoal: Goal = {
        text: this.newGoalText,
        tag: this.newGoalTag,
        isComplete: false,
      };

      this.impGoals.push(newGoal);

      this.newGoalText = '';
      this.newGoalTag = '';

      this.isEditing = false;
    }
  }

  save() {
    for (let goal of this.impGoals) {
      if (!(this.impGoals.some(qGoal => qGoal.text === goal.text))) {
        this.impGoals.push(goal);
        this.saved.emit(goal);
      }
    }
    this.isEditing = false;
    this.closeModal();
  }

  openModal() {
    this.isOpen = true;
  }

  closeModal() {
    this.isOpen = false;
    this.close.emit();
  }
}
