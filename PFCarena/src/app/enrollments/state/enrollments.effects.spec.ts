import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { EnrollmentsEffects } from './enrollments.effects';

describe('EnrollmentsEffects', () => {
  let actions$: Observable<any>;
  let effects: EnrollmentsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EnrollmentsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(EnrollmentsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
