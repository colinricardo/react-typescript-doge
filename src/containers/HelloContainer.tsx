import { connect } from 'react-redux';
import * as actions from '../actions/enthusiasm';
import { StoreState } from '../types';
import Hello from '../components/Hello';

export const mapStateToProps = (state: StoreState) => {
  return {
    enthusiasmLevel: state.enthusiasmState.enthusiasmLevel,
    name: state.enthusiasmState.languageName,
  };
};

export default connect(
  mapStateToProps,
  {
    onIncrement: actions.incrementEnthusiasm,
    onDecrement: actions.decrementEnthusiasm,
  },
)(Hello);
