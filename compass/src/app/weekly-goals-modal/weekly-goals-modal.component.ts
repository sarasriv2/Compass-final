import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule} from '@angular/material/select';

interface Goal {
  text: string;
  tag: string;
  isComplete: boolean;
}

@Component({
  selector: 'app-weekly-goals-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSelectModule],
  templateUrl: './weekly-goals-modal.component.html',
  styleUrl: './weekly-goals-modal.component.scss',
  encapsulation: ViewEncapsulation.None,
})


export class WeeklyGoalsModalComponent {
  newGoalText: string = '';
  newGoalTag: string = '';
  defText: string = "Enter your goal...";
  defTag: string = "quarterly goal..."
  isEditing: boolean = false; 

  @Input() impGoals: Goal[] = [];
  @Output() close = new EventEmitter<void>();

  modalGoals: Goal[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['impGoals'] && changes['impGoals'].currentValue) {
      this.modalGoals = structuredClone(this.impGoals);
    }
  }

  get uniqueTags(): string[] {
    return Array.from(new Set(this.modalGoals.map(goal => goal.tag)));
  }

  getTagStyle(tag: string): string{
    if (tag === "#apply-internships") {
      return "#2DBDB1";
    }
    else if (tag === "#class-algorithms") {
      return "#FFB987";
    }
    else {
      return "purple";
    }
  }

  updateNewGoalText(event: Event) {
    const target = event.target as HTMLElement;
    this.newGoalText = target.innerText;
  }

  updateNewGoalTag(event: Event) {
    const target = event.target as HTMLElement;
    this.newGoalTag =  target.innerText;
  }

  onEnter(event: KeyboardEvent) {
    if (event.key === 'Enter') {
        const newGoal: Goal = {
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
      if (!(this.impGoals.some(impGoal => impGoal.text == goal.text))) {
        this.impGoals.push(goal);

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
