import { emitter } from '../../../common/infrastructure';
import { databaseChangeEventId } from '../../../common/const';
import {delay} from 'redux-saga'
import {put} from 'redux-saga/effects'
import {databaseChanged, requestInfoDTU} from '../actions';

export function* dbChangeSaga() {  
  while(true) {
    // Wrapping you emitter.oon into a promise
    const promise = new Promise((resolve, reject) => {
      emitter.on(databaseChangeEventId, (dbId) => resolve(dbId), null);    
    })  
    const dbId = yield promise;
    yield put(databaseChanged(dbId))
    yield put(requestInfoDTU(dbId))
  }
}

