import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-hashtag-notes',
  standalone: true,
  imports: [CommonModule, ActivatedRoute],
  templateUrl: './hashtag-notes.component.html',
  styleUrl: './hashtag-notes.component.scss'
})
export class HashtagNotesComponent implements OnInit {
  tag: string | null = null;
  notes: { title: string; content: string }[] = [
    { title: 'Note 1', content: 'This is content for note 1.' },
    { title: 'Note 2', content: 'This is content for note 2.' },
  ];
  
  constructor(private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.tag = params['tag'] || null; // Set the tag from the URL query param
    });
  }

  closeModal() {
    window.close(); // Notify parent to close the modal
  }
}



