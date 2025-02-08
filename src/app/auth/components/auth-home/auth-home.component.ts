import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-auth-home',
  imports: [RouterOutlet, FontAwesomeModule],
  templateUrl: './auth-home.component.html',
  styleUrl: './auth-home.component.scss',
})
export class AuthHomeComponent {
  faDumbbell = faDumbbell;
}
