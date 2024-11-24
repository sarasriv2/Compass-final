import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatetimeComponent } from './datetime/datetime.component';
import { GreetingComponent } from './greeting/greeting.component';
import { NavbarComponent } from './navbar/navbar.component'
import { WeeklyGoalsComponent } from './weekly-goals/weekly-goals.component';
import { WeeklyGoalsModalComponent } from './weekly-goals-modal/weekly-goals-modal.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DatetimeComponent, GreetingComponent, NavbarComponent, RouterOutlet, WeeklyGoalsComponent, WeeklyGoalsModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'sakkara-midterm';
}
