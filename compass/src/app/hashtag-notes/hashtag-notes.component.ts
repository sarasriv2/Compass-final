import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-hashtag-notes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hashtag-notes.component.html',
  styleUrl: './hashtag-notes.component.scss'
})
export class HashtagNotesComponent {
  @Input() tag: string | null = null;
  @Input() notes: { title: string; content: string }[] = []
  @Output() close = new EventEmitter<void>(); // Event emitter for closing the modal

  closeModal() {
    this.close.emit(); // Notify parent to close the modal
  }
}



