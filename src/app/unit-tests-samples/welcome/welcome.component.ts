import { Component } from '@angular/core';
import { MockUserServiceService } from './mock-user-service.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
  welcome = '';
  constructor(private userService: MockUserServiceService) {
    this.welcome = userService.isLoggedIn
      ? 'Welcome, ' + userService.user.name
      : 'Please log in.';
  }
}
