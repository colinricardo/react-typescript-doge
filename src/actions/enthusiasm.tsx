import * as types from './types';

export interface IncrementEnthusiasm {
  type: types.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
  type: types.DECREMENT_ENTHUSIASM;
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

export const incrementEnthusiasm = (): IncrementEnthusiasm => {
  return { type: types.INCREMENT_ENTHUSIASM };
};

export const decrementEnthusiasm = (): DecrementEnthusiasm => {
  return { type: types.DECREMENT_ENTHUSIASM };
};
