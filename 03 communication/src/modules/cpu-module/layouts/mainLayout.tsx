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
      <GlobalEventComponentContainer/>
      {props.children}  
    </>
  </Provider>



const mapStateToProps = (state : State) => ({  
})

const mapDispatchToProps = (dispatch) => ({
  onDatabaseChange: (dbId) => dispatch(databaseChanged(dbId)),
  onRequestCPUInfo: (dbId) => dispatch(requestInfoCPU(dbId))
})

interface Props {
  onDatabaseChange: (number) => void;
  onRequestCPUInfo: (number) => void;
}

// TODO isolate event listening to a saga
class GobalEventComponent extends React.PureComponent<Props> {
  componentDidMount() {
    emitter.on(databaseChangeEventId, (dbId) => {
      this.props.onDatabaseChange(dbId); 
      this.props.onRequestCPUInfo(dbId);
    }, null);
  }

  render() {
    return (
      <>          
      </>    
    )    
  }
}

const GlobalEventComponentContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  {storeKey: STORE_KEY}
)(GobalEventComponent);




