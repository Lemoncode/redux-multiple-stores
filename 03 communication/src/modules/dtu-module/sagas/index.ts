import {all} from 'redux-saga/effects';
import {dbChangeSaga} from './dbChangeSaga';

export function* rootSaga() {
  yield all([
    dbChangeSaga()
  ])
}