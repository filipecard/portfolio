import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicRecordComponent } from './academic-record.component';

describe('AcademicRecordComponent', () => {
  let component: AcademicRecordComponent;
  let fixture: ComponentFixture<AcademicRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicRecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademicRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
