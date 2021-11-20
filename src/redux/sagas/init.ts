import { put, StrictEffect } from 'redux-saga/effects';
import { Actions } from '../actions/init';

export function* initSagas(): Generator<StrictEffect, void, unknown> {
  yield put(Actions.init());
}
