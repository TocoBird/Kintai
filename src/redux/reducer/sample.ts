import { ActionSample } from '@/redux/action/sample';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

export interface StateSample {
  readonly sample: number;
}

export const initialStateSample: StateSample = {
  sample: 0,
};

export const ReducerSample = reducerWithInitialState(initialStateSample).case(
  ActionSample.setSample,
  (state, sample) => {
    return { ...state, sample };
  }
);
