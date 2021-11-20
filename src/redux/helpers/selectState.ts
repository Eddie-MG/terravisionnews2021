import { select, SelectEffect } from 'redux-saga/effects';
import { GlobalState } from '..';

export function selectState<T>(selector: (s: GlobalState) => T): SelectEffect {
  return select(selector);
}
