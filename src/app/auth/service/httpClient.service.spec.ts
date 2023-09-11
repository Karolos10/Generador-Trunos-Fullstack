/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientService } from './httpClient.service';

describe('Service: HttpClient', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClientService]
    });
  });

  it('should ...', inject([HttpClientService], (service: HttpClientService) => {
    expect(service).toBeTruthy();
  }));
});
