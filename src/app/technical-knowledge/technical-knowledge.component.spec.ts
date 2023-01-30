import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalKnowledgeComponent } from './technical-knowledge.component';

describe('TechnicalKnowledgeComponent', () => {
  let component: TechnicalKnowledgeComponent;
  let fixture: ComponentFixture<TechnicalKnowledgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicalKnowledgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicalKnowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
