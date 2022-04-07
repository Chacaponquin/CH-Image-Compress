import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './containers/auth-form/components/sign-up/sign-up.component';
import { LoginComponent } from './containers/auth-form/components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthFormComponent } from './containers/auth-form/auth-form.component';

@NgModule({
  declarations: [SignUpComponent, AuthFormComponent, LoginComponent],
  exports: [SignUpComponent, AuthFormComponent, LoginComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class AuthModule {}
