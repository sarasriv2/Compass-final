import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

interface Goal {
  text: string;
  isComplete: boolean;
}

@Component({
  selector: 'app-long-term-goals-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSelectModule],
  templateUrl: './long-term-goals-modal.component.html',
  styleUrls: ['./long-term-goals-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LongTermGoalsModalComponent {
  @Input() oneYearGoals: Goal[] = [];
  @Input() fiveYearGoals: Goal[] = [];
  @Output() close = new EventEmitter<void>();
  @Output() updateGoals = new EventEmitter<{ oneYear: Goal[]; fiveYear: Goal[] }>();

  newGoal: string = '';
  goalType: 'oneYear' | 'fiveYear' = 'oneYear';
  isEditing: boolean = false;
  defText: string = 'Click here to add a new goal...';
  modalGoals: Goal[] = [];

  ngOnInit() {
    this.updateModalGoals(); 
  }

  closeModal() {
    this.close.emit();
  }

  addGoal() {
    if (this.newGoal.trim()) {
      if (this.goalType === 'oneYear') {
        this.oneYearGoals.push({ text: this.newGoal, isComplete: false });
      } else {
        this.fiveYearGoals.push({ text: this.newGoal, isComplete: false });
      }
      this.updateModalGoals(); 
      this.newGoal = '';
    }
  }

  save() {
    this.updateGoals.emit({
      oneYear: this.oneYearGoals,
      fiveYear: this.fiveYearGoals
    });
    this.close.emit();
  }

  updateNewGoalText(event: Event) {
    const input = event.target as HTMLInputElement;
    this.newGoal = input.value;
  }

  onEnter(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.addGoal();
    }
  }

  onClick() {
    this.isEditing = true;
  }

  private updateModalGoals() {
    if (this.goalType === 'oneYear') {
      this.modalGoals = this.oneYearGoals.slice(0, 2); 
    } else {
      this.modalGoals = this.fiveYearGoals.slice(0, 2); 
    }
  }
}
