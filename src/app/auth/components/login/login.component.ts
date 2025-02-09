import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../services/auth.service';
import { LedInputComponent } from '../../../shared/components/led-input/led-input.component';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterModule,
    LedInputComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  formBuilder = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);

  faRightToBracket = faRightToBracket;

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  onSubmit(): void {
    const { email, password } = this.loginForm.value;

    if (email && password) {
      this.authService.login(email, password).subscribe(() => {
        this.router.navigateByUrl('');
      });
    }
  }
}
