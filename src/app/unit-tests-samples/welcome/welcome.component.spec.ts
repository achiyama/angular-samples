import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeComponent } from './welcome.component';
import { MockUserServiceService } from './mock-user-service.service';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let userService: MockUserServiceService;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeComponent],
      providers: [
        { provide: MockUserServiceService, useClass: MockUserServiceService },
      ],
    });
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(MockUserServiceService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
