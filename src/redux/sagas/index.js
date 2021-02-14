import { all } from 'redux-saga/effects';
import fetchSaga from './fetchSaga';
import filterSaga from './filterSaga';

export default function* rootSaga(){
    yield all(
        [fetchSaga(), filterSaga()],
        )
}