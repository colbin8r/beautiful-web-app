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
  article: {
    author: null,
    content: null,
    date_published: null,
    dek: null,
    direction: null,
    domain: null,
    excerpt: null,
    lead_image_url: null,
    next_page_url: null,
    rendered_page: null,
    title: null,
    total_pages: null,
    url: null,
    word_count: null,
  },
  articleLoaded: false,
  error: null,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_URL:
      return state
        .set('url', action.url);
    case ARTICLE_LOADED:
      return state
        .set('article', action.article)
        .set('articleLoaded', true);
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
