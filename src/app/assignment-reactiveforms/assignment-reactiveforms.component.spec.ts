import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentReactiveformsComponent } from './assignment-reactiveforms.component';

describe('AssignmentReactiveformsComponent', () => {
  let component: AssignmentReactiveformsComponent;
  let fixture: ComponentFixture<AssignmentReactiveformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentReactiveformsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignmentReactiveformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
