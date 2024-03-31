import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetUpComponent } from './set-up.component';

describe('SetUpComponent', () => {
  let component: SetUpComponent;
  let fixture: ComponentFixture<SetUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetUpComponent]
    });
    fixture = TestBed.createComponent(SetUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
