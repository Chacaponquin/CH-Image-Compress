import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { authForms } from 'src/app/data/interfaces/authForms.enum';
import { AuthFormComponent } from 'src/app/modules/auth/containers/auth-form/auth-form.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  authForms = authForms;

  activeForm: authForms = authForms.LOGIN;

  openAuthForm(authOption: authForms) {
    this.activeForm = authOption;

    this.modalService.open(AuthFormComponent);
  }

  ngOnInit(): void {}
}
