import { call, put } from 'redux-saga/effects';
import api from '../services/api';
import { Item} from '../redux/actiontypes';
import { loadFailure, loadSuccess } from '../redux/actions';
const data1:Item[]=[];
console.log("data1",data1);
export function* load() {
  try {
    const { data } = yield call(api.get, 'https://jsonplaceholder.typicode.com/posts');
    console.log(data);
    console.log(data.length);
yield put(loadSuccess(data1));

  } catch (error) {
    yield put(loadFailure());
  }
}

