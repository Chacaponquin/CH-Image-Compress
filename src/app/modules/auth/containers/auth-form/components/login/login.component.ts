import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {}

  loginForm = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required],
  });

  login() {
    this.userService.checkUser(this.loginForm.value).subscribe((user) => {
      if (user) {
        this.userService.currentUser.next(user);
        localStorage.setItem('token', user.token);
      }
    });
  }
}
