import { all } from 'redux-saga/effects';
import pokeSaga from './pokeSaga';
import filterSaga from './filterSaga';

export default function* rootSaga(){
    yield all(
        [pokeSaga(), filterSaga()],
        )
}