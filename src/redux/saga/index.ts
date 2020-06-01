import { all, fork } from 'redux-saga/effects';
import { watchSample } from '@/redux/saga/sample';

export default function* root() {
  yield all([fork(watchSample)]);
}
