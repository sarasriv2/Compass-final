import { Component, EventEmitter, Input, Output, ViewEncapsulation, SimpleChanges } from '@angular/core';
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
  @Input() impOneYear: Goal[] = [];
  @Input() impFiveYear: Goal[] = [];
  @Output() close = new EventEmitter<void>();
  @Output() updateGoals = new EventEmitter<{ oneYear: Goal[]; fiveYear: Goal[] }>();
  
  oneYearGoals: Goal[] = [];
  fiveYearGoals: Goal[] = [];
  editingIndex: { type: 'oneYear' | 'fiveYear'; index: number | null } = { type: 'oneYear', index: null };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['impOneYear'] && changes['impOneYear'].currentValue) {
      this.oneYearGoals = structuredClone(this.impOneYear);
    }
    if (changes['impFiveYear'] && changes['impFiveYear'].currentValue) {
      this.fiveYearGoals = structuredClone(this.impFiveYear);
    }
  }

  closeModal() {
    this.close.emit();
  }

  editGoal(type: 'oneYear' | 'fiveYear', index: number) {
    this.editingIndex = { type, index };
  }

  updateGoalText(event: Event) {
    const input = event.target as HTMLElement;
    const newValue = input.textContent?.trim() || '';
    const { type, index } = this.editingIndex;

    if (index !== null) {
      if (type === 'oneYear') {
        this.oneYearGoals[index].text = newValue;
      } else if (type === 'fiveYear') {
        this.fiveYearGoals[index].text = newValue;
      }
    }
  }

  save() {
    this.updateGoals.emit({
      oneYear: this.oneYearGoals,
      fiveYear: this.fiveYearGoals,
    });
    this.close.emit();
  }
}

