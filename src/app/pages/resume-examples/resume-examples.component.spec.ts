import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeExamplesComponent } from './resume-examples.component';

describe('ResumeExamplesComponent', () => {
  let component: ResumeExamplesComponent;
  let fixture: ComponentFixture<ResumeExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeExamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
