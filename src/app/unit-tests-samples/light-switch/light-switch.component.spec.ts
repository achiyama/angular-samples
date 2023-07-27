import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightSwitchComponent } from './light-switch.component';

describe('LightSwitchComponent', () => {
  let component: LightSwitchComponent;
  let fixture: ComponentFixture<LightSwitchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LightSwitchComponent],
    });
    fixture = TestBed.createComponent(LightSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // これがテストケース
  it('#clicked() should toggle #isOn', () => {
    const component = new LightSwitchComponent();
    expect(component.isOn).withContext('off at first').toBe(false);
    component.clicked();
    expect(component.isOn).withContext('on after click').toBe(true);
    component.clicked();
    expect(component.isOn).withContext('off after second click').toBe(false);
  });

  it('#clicked() should set #message to "is on"', () => {
    const component = new LightSwitchComponent();
    expect(component.message)
      .withContext('off at first')
      .toMatch(/is off/i);
    component.clicked();
    expect(component.message).withContext('on after clicked').toMatch(/is on/i);
  });
});
