/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectURL = () => createSelector(
  selectHome,
  (homeState) => homeState.get('url')
);

const makeSelectArticle = () => createSelector(
  selectHome,
  (homeState) => homeState.get('article')
);

export {
  selectHome,
  makeSelectURL,
  makeSelectArticle
};
