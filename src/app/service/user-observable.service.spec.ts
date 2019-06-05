import { TestBed } from '@angular/core/testing';

import { UserObservableService } from './user-observable.service';

describe('UserObservableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserObservableService = TestBed.get(UserObservableService);
    expect(service).toBeTruthy();
  });
});
