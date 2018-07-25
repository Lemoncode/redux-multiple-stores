import { connect } from 'react-redux';
import { NameEditComponent } from './nameEdit';
import {updateUserProfileName} from '../../actions/updateUserProfilename';
import { State } from '../../reducers'
import { STORE_KEY } from '../../key';

const mapStateToProps = (state : State) => {
  return {
    userName: state.userProfileReducer.firstname
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (name : string) => dispatch(updateUserProfileName(name))
  }
}

export const NameEditContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  {storeKey: STORE_KEY}
)(NameEditComponent);
