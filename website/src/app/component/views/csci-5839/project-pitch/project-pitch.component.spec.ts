import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPitchComponent } from './project-pitch.component';

describe('ProjectPitchComponent', () => {
  let component: ProjectPitchComponent;
  let fixture: ComponentFixture<ProjectPitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectPitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
