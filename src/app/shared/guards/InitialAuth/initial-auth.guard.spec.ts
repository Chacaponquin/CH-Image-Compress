import { TestBed } from '@angular/core/testing';

import { InitialAuthGuard } from './initial-auth.guard';

describe('InitialAuthGuard', () => {
  let guard: InitialAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(InitialAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
