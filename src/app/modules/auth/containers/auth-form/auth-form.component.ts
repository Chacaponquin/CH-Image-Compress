import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { authForms } from 'src/app/data/interfaces/authForms.enum';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css'],
})
export class AuthFormComponent implements OnInit {
  @Input() activeForm: authForms; // = authForms.LOGIN;

  constructor(public activeModal: NgbActiveModal) {}

  authForms = authForms;

  ngOnInit(): void {
    console.log(this.activeForm);
  }

  close() {
    this.activeModal.close();
  }
}
