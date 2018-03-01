/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { CHANGE_URL } from './constants';
import { articleLoaded, articleLoadError } from './actions';

import request from 'utils/request';
import { makeSelectURL } from './selectors';

/**
 * Github repos request/response handler
 */
export function* getArticle() {
  // Select URL from store
  const url = yield select(makeSelectURL());
  const requestURL = `https://colbin8r-mercury-proxy.herokuapp.com/article?url=${url}`
  // const requestURL = `http://localhost:8080/article?url=${url}`

  try {
    // Call our request helper (see 'utils/request')
    const article = yield call(request, requestURL);
    yield put(articleLoaded(article));
  } catch (err) {
    yield put(articleLoadError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* articleLoader() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(CHANGE_URL, getArticle);
}
