/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ValidacionServiceService } from './validacionService.service';

describe('Service: ValidacionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidacionServiceService]
    });
  });

  it('should ...', inject([ValidacionServiceService], (service: ValidacionServiceService) => {
    expect(service).toBeTruthy();
  }));
});
