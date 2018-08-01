import { connect } from 'react-redux';
import { DbPicker } from './dbPicker';
import { State } from '../reducers'
import { STORE_KEY } from '../key';
import { updateSelectedDatabase } from '../actions/updateSelectedDatabase';

const mapStateToProps = (state : State) => {
  return {
    databaseId: state.activeSelectionReducer.databaseId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (databaseId : number) => dispatch(updateSelectedDatabase(databaseId))
  }
}

export const DbPickerContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  {storeKey: STORE_KEY}
)(DbPicker);
