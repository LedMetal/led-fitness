import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-home',
  imports: [RouterModule, FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  authService = inject(AuthService);
  router = inject(Router);

  faRightFromBracket = faRightFromBracket;

  logout(): void {
    this.authService.logout().subscribe(() => {
      this.router.navigateByUrl('/auth');
    });
  }
}
