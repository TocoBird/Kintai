import { takeEvery } from 'redux-saga/effects';
import { ActionSample } from '@/redux/action/sample';

export function* watchSample() {
  yield takeEvery(ActionSample.requestSample, requestSample);
}

function* requestSample(action: { type: string }) {
  yield;
}
