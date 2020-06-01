import { actionCreatorFactory } from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const ActionSample = {
  setSample: actionCreator<number>('SET_SAMPLE'),
  requestSample: actionCreator('REQUEST_SAMPLE'),
};
