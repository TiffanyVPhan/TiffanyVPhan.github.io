import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FadeInComponent } from './fade-in.component';

describe('FadeInComponent', () => {
  let component: FadeInComponent;
  let fixture: ComponentFixture<FadeInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FadeInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FadeInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
