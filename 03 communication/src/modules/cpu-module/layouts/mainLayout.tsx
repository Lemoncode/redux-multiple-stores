import * as React from 'react';
import { emitter } from '../../../common/infrastructure';
import { databaseChangeEventId } from '../../../common/const';
import {databaseChanged, requestInfoCPU} from '../actions'
import {Provider, store} from '../store'
import {connect} from 'react-redux';
import { STORE_KEY } from '../key';
import { State } from '../reducers';

export const MainLayout : React.StatelessComponent = (props) => 
  <Provider store={store}>  
    <>
      {props.children}  
    </>
  </Provider>

// If a intial DatabaseId has to be informed:
//  a) inform it once the database list is informed (launch action)
//  b) we could have a container that fires the initial action once
//  c) we could have a saga that uses yield select to get the initial value and launch actions (that will emit event to children)



