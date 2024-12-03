import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  standalone: true,
  imports: [],
  templateUrl: './datetime.component.html',
  styleUrl: './datetime.component.scss'
})

export class DatetimeComponent implements OnInit {
  seconds: string = '00';

  ngOnInit(): void {
    this.updateSeconds();
    setInterval(() => this.updateSeconds(), 1000);
  }

  private updateSeconds(): void {
    const now = new Date();
    const sec = now.getSeconds();
    this.seconds = sec < 10 ? `0${sec}` : sec.toString();
  }
}
