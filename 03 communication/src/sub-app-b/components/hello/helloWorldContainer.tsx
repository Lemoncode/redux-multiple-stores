import {connect} from 'react-redux';
import {HelloWorldComponent} from './helloWorld';
import { STORE_KEY } from '../../key';

const mapStateToProps = (state) => {
  return {
    userName: state.userProfileReducer.firstname
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export const HelloWorldContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  {storeKey: STORE_KEY}
)(HelloWorldComponent);
