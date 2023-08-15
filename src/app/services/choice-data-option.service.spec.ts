import { TestBed } from '@angular/core/testing';

import { ChoiceDataOptionService } from './choice-data-option.service';

describe('ChoiceDataOptionService', () => {
  let service: ChoiceDataOptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChoiceDataOptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
