import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTestingComponent } from './user-testing.component';

describe('UserTestingComponent', () => {
  let component: UserTestingComponent;
  let fixture: ComponentFixture<UserTestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
