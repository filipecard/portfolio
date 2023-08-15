import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoContatoComponent } from './info-contato.component';

describe('InfoContatoComponent', () => {
  let component: InfoContatoComponent;
  let fixture: ComponentFixture<InfoContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoContatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
