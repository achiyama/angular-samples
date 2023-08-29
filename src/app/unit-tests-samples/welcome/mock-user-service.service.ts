import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MockUserServiceService {
  constructor() {}
  isLoggedIn = true;
  user = { name: 'Test User' };
}
