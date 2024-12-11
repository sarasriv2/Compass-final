import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-long-term-notes',
  standalone: true,
  imports: [],
  templateUrl: './long-term-notes.component.html',
  styleUrl: './long-term-notes.component.scss'
})
export class LongTermNotesComponent {
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
}
