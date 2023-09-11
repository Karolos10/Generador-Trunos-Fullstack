/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataPersistenceService } from './dataPersistence.service';

describe('Service: DataPersistence', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataPersistenceService]
    });
  });

  it('should ...', inject([DataPersistenceService], (service: DataPersistenceService) => {
    expect(service).toBeTruthy();
  }));
});
