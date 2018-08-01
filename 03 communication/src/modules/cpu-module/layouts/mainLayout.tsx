import * as React from 'react';
import { emitter } from '../../../common/infrastructure';
import { databaseChangeEventId } from '../../../common/const';
import {databaseChanged} from '../actions/databaseChanged'
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
  onDatabaseChange: (dbId) => dispatch(databaseChanged(dbId))
})

interface Props {
  onDatabaseChange: (number) => void;
}

// TODO isolate event listening to a saga
class GobalEventComponent extends React.PureComponent<Props> {
  componentDidMount() {
    emitter.on(databaseChangeEventId, (dbId) => {
      this.props.onDatabaseChange(dbId);      
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




