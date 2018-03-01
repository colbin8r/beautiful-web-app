/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
  CHANGE_URL,
  ARTICLE_LOADED,
  ARTICLE_LOAD_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  url: '',
  article: null,
  error: null,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_URL:
      return state
        .set('url', action.url);
    case ARTICLE_LOADED:
      return state
        .set('article', action.article);
    case ARTICLE_LOAD_ERROR:
      // discard the error for now
      return state;
      // return state
      //   .set('error', action.error);
    default:
      return state;
  }
}

export default homeReducer;
