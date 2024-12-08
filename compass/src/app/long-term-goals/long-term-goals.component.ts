import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Goal {
  time: string;
  text: string;
}

@Component({
  selector: 'app-long-term-goals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './long-term-goals.component.html',
  styleUrl: './long-term-goals.component.scss'
})

export class LongTermGoalsComponent {
  isOpen: boolean = false; 

  goals: Goal[] = [
    { time: '1 year', text: 'Secure SWE or UX Engineering Internship' },
    { time: '5 year', text: 'Working as a SWE in a team I love with some UX/Design oriented work' }
  ];

  openModal(): void {
    this.isOpen = true;
  }

  closeModal(): void {
    this.isOpen = false;
  }

}
