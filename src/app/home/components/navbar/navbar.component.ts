import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'navbar',
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;

  currentDate: Date = new Date();
  isToday: boolean = true;

  /**
   * Evaluate whether the selected date is today
   */
  evaluateIsToday(): void {
    this.isToday =
      new Date().toDateString() === this.currentDate.toDateString();
  }

  /**
   * Increment the current date by the specified amount
   *
   * @param incrementBy -1 or 1 to increment the current date
   */
  incrementDay(incrementBy: 1 | -1): void {
    this.currentDate = new Date(
      this.currentDate.setDate(this.currentDate.getDate() + incrementBy)
    );

    this.evaluateIsToday();
  }
}
