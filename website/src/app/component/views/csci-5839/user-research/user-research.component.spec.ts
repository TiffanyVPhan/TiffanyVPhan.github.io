import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserResearchComponent } from './user-research.component';

describe('UserResearchComponent', () => {
  let component: UserResearchComponent;
  let fixture: ComponentFixture<UserResearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserResearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
