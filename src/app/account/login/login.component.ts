import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  feedbackForm!: FormGroup;
  feedbackModal: boolean = false;


  constructor(
    private formBuilder: FormBuilder, 
    public authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
    this.feedbackForm = this.formBuilder.group({
      message: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
    });


  }


  submitForm(): void {
    if (this.loginForm.valid) {
      this.authService.AdminSignIn(this.loginForm.value.userName, this.loginForm.value.password);
    } else {
      Object.values(this.loginForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
  

  showModal(): void {
    this.feedbackModal = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.feedbackModal = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.feedbackModal = false;
    this.feedbackForm.reset();
  }

  sendFeedback(): void {
    if (this.feedbackForm.valid) {
    } else {
      Object.values(this.feedbackForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

}
