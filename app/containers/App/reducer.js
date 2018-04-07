import { fromJS } from 'immutable';

import {
  CHANGE_THEME,
} from './constants';

const initialState = fromJS({
  theme: {
    name: 'default',
    typography: {
      body: 'Font Body',
      display: 'Font Display',
    },
    sizing: {
      base: '1rem',
      ratio: '1.618',
    },
    colors: {
      primary: 'blue',
      secondary: 'red',
      background: 'gray',
    },
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return state
        .set('theme', action.theme);
    default:
      return state;
  }
}

export default appReducer;
