/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StanizerService } from './stanizer.service';

describe('StanizerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StanizerService]
    });
  });

  it('should ...', inject([StanizerService], (service: StanizerService) => {
    expect(service).toBeTruthy();
  }));
});
