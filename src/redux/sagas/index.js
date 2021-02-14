import { all } from 'redux-saga/effects';
import fetchSaga from './fetchSaga';
import filterSaga from './filterSaga';
import storeSelectedSaga from './storeSelectedSaga';

export default function* rootSaga(){
    yield all(
        [fetchSaga(), filterSaga(), storeSelectedSaga()],
        )
}