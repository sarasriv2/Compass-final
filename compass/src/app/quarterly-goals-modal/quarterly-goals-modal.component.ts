import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

interface Goal {
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
  defText: string = "Enter your goal...";
  defTag: string = "quarterly goal...";
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

  getTagStyle(tag: string): string {
    switch (tag) {
      case "#apply-internships":
        return "#2DBDB1";
      case "#class-algorithms":
        return "#FFB987";
      default:
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
    if (event.key === 'Enter' && this.newGoalText.trim()) {
      const newGoal: Goal = {
        text: this.newGoalText.trim(),
        tag: this.newGoalTag.trim() || 'None',
        isComplete: false,
      };

      this.modalGoals.push(newGoal);

      this.newGoalText = '';
      this.newGoalTag = '';

      this.isEditing = false;
    }
  }

  save() {
    this.impGoals.length = 0; 
    this.modalGoals.forEach(goal => {
        this.impGoals.push({ ...goal }); 
    });

   
    this.newGoalText = '';
    this.newGoalTag = '';

    this.closeModal(); 
  }

  onClick() {
    this.isEditing = true;
  }

  closeModal() {
    this.close.emit();
  }
}
