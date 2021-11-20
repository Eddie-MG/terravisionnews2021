import { all, AllEffect } from 'redux-saga/effects';
import { initSagas } from './init';

import { mapSagas } from './map';

// single entry point to start all Sagas at once
export function* rootSagas(): Generator<AllEffect<Generator>, void, unknown> {
  if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'test') {
    yield all([
      mapSagas(),
      initSagas()
    ]);
  }
}
