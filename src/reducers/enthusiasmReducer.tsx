import { EnthusiasmAction } from '../actions/enthusiasm';
import { EnthusiasmState } from '../types';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../actions/types';

const initialState: EnthusiasmState = {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
};

const enthusiasmReducer = (
  state: EnthusiasmState = initialState,
  action: EnthusiasmAction,
): EnthusiasmState => {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSIASM:
      return {
        ...state,
        enthusiasmLevel: state.enthusiasmLevel - 1,
      };
  }

  return state;
};

export default enthusiasmReducer;
