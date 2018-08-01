import {connect} from 'react-redux';
import {DTUIndicator} from './dtuIndicator';
import { STORE_KEY } from '../../key';
import { State } from '../../reducers';

const mapStateToProps = (state : State) => ({
    databaseId: state.dtuInfoReducer.databaseId,
    percentage: state.dtuInfoReducer.percentage
})

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export const DTUIndicatorContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  {storeKey: STORE_KEY}
)(DTUIndicator);
