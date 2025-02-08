import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule, FontAwesomeModule, RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  formBuilder = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);

  signUpForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  faCirclePlus = faCirclePlus;

  onSubmit(): void {
    const { email, username, password } = this.signUpForm.value;

    if (email && username && password) {
      this.authService.signUp(email, username, password).subscribe(() => {
        this.router.navigateByUrl('');
      });
    }
  }
}
