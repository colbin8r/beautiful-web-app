import { createSelector } from 'reselect';

const selectRoute = (state) => state.get('route');
const selectGlobal = (state) => state.get('global');

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

const makeSelectTheme = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('theme').toJS()
);

export {
  selectGlobal,
  makeSelectLocation,
  makeSelectTheme,
};
