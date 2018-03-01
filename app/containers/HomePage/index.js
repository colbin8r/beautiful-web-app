/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import qs from 'query-string';

import ArticleViewer from 'components/ArticleViewer/Loadable';

import messages from './messages';
import reducer from './reducer';
import saga from './saga';
import { changeURL } from './actions';
import { makeSelectURL, makeSelectArticle } from './selectors';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    // the url comes into the component through the router as a query param
    // dispatch an action to change the url in the store once we receive it
    const url = qs.parse(this.props.location.search).url;
    this.props.onURLChange(url);
  }

  render() {
    return (
      <h1>
        <FormattedMessage {...messages.header} />
        <ArticleViewer
          article={this.props.article}
        />
      </h1>
    );
  }
}

HomePage.propTypes = {
  article: PropTypes.object,
  location: PropTypes.object,
  onURLChange: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onURLChange: (url) => dispatch(changeURL(url)),
  };
}

const mapStateToProps = createStructuredSelector({
  url: makeSelectURL(),
  article: makeSelectArticle(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(HomePage);
