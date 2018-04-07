/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { ThemeProvider } from 'styled-components';
import injectReducer from 'utils/injectReducer';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import reducer from './reducer';
import { changeTheme } from './actions';
import {
  makeSelectTheme,
} from './selectors';

// ThemeProvider usage based on suggestions from
// https://github.com/react-boilerplate/react-boilerplate/issues/1547

export class App extends React.PureComponent {
  render() {
    return (
      <div className={'theme-'+this.props.theme.name}>
        <ThemeProvider theme={this.props.theme}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </ThemeProvider>
      </div>
    );
  }
}

App.propTypes = {
  theme: PropTypes.object,
}

export function mapDispatchToProps(dispatch) {
  return {
    onThemeChange: (theme) => dispatch(changeTheme(theme)),
  };
}

const mapStateToProps = createStructuredSelector({
  theme: makeSelectTheme(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'global', reducer });

export default compose(
  withReducer,
  withConnect
)(App);

// export default App;

// export default function App() {
//   return (
//     <div>
//       <Switch>
//         <Route exact path="/" component={HomePage} />
//         <Route component={NotFoundPage} />
//       </Switch>
//     </div>
//   );
// }
