import { all, takeEvery, takeLatest } from 'redux-saga/effects';
import * as actions from '../redux/actions';
import { ItemsTypes } from '../redux/actiontypes';
import { load } from './sagas';

export default function* rootSaga():Generator {
  return yield all([
    takeLatest(ItemsTypes.LOAD_REQUEST, load)
  ]);
}
