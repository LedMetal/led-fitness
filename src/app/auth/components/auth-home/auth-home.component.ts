import { Component, inject } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCirclePlus,
  faRightToBracket,
} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-home',
  imports: [RouterOutlet, FontAwesomeModule, RouterModule],
  templateUrl: './auth-home.component.html',
  styleUrl: './auth-home.component.scss',
})
export class AuthHomeComponent {
  router = inject(Router);
  authService = inject(AuthService);

  faCirclePlus = faCirclePlus;
  faRightToBracket = faRightToBracket;
}
