import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

export interface Goal {
  title: string;
  text: string;
  tag: string;
  isComplete: boolean;
}

@Component({
  selector: 'app-quarterly-goals-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSelectModule],
  templateUrl: './quarterly-goals-modal.component.html',
  styleUrls: ['./quarterly-goals-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class QuarterlyGoalsModalComponent {
  newGoalText: string = '';
  newGoalTag: string = '';
  defText: string = "Enter your quarterly goal...";
  defTag: string = "quarterly goal...";
  isEditing: boolean = false;

  @Input() impGoals: Goal[] = [];
  @Output() close = new EventEmitter<void>();
  @Output() saved = new EventEmitter<Goal>();
  modalGoals: Goal[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['quarterlyGoals'] && changes['quarterlyGoals'].currentValue) {
      this.modalGoals = structuredClone(this.impGoals);
    }
  }

  get uniqueTags(): string[] {
    return Array.from(new Set(this.modalGoals.map(goal => goal.tag)));
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

  onEnter(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      const newGoal: Goal = {
        title: 'New Goal', // Set a default title for new goals
        text: this.newGoalText,
        tag: this.newGoalTag,
        isComplete: false,
      };

      this.modalGoals.push(newGoal);

      this.newGoalText = '';
      this.newGoalTag = '';

      this.isEditing = false;
    }
  }

  save() {
    for (let goal of this.modalGoals) {
      if (!(this.impGoals.some(impGoals => impGoals.text == goal.text))) {
        this.impGoals.push(goal);
        this.saved.emit(goal);
      }
    }

    this.isEditing = false;
    this.closeModal();
  }

  onClick() {
    this.isEditing = true;
  }

  closeModal() {
    this.close.emit();
  }
}
