import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loading: boolean;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.isLoading.subscribe((value) => (this.loading = value));
  }
}
