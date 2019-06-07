import { TestBed } from '@angular/core/testing';

import { LiveNewsService } from './live-news.service';

describe('LiveNewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LiveNewsService = TestBed.get(LiveNewsService);
    expect(service).toBeTruthy();
  });
});
