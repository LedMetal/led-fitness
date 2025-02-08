import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from './auth/services/auth.service';
import { User } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  authService = inject(AuthService);
  router = inject(Router);

  ngOnInit(): void {
    this.authService.user$.subscribe((user: User | null) => {
      if (user) {
        this.authService.currentUser.set({
          email: user.email!,
          username: user.displayName!,
        });
      } else {
        this.authService.currentUser.set(null);
      }
    });

    if (!this.authService.currentUser()) {
      this.router.navigateByUrl('auth/login');
    } else {
      this.router.navigateByUrl('home');
    }
  }
}
