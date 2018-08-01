import {connect} from 'react-redux';
import {CPUIndicator} from './cpuIndicator';
import { STORE_KEY } from '../../key';
import { State } from '../../reducers';

const mapStateToProps = (state : State) => ({
    databaseId: state.cpuInfoReducer.databaseId,
    percentage: state.cpuInfoReducer.percentage
})

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export const CPUIndicatorContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  {storeKey: STORE_KEY}
)(CPUIndicator);
