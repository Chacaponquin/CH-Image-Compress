import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor(private fb: FormBuilder, private userService: UserService) {}

  signUpForm = this.fb.group({
    username: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(30)],
    ],
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required],
  });

  ngOnInit(): void {}

  createUser() {
    this.userService.createUser(this.signUpForm.value).subscribe(
      (user) => console.log(user),
      (err) => console.log(err)
    );
  }
}
