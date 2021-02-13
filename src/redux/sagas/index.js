import { all } from 'redux-saga/effects';
import pokeSaga from './pokeSaga';

export default function* rootSaga(){
    yield all(
        [pokeSaga()],
        )
}