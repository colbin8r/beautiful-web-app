/**
*
* ArticleViewer
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
// import styled from 'styled-components';

import renderHTML from 'react-render-html';

import messages from './messages';

class ArticleViewer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  renderContent() {
    if (this.props.article !== null) {
      return renderHTML(this.props.article.content);
    }
    return '';
  }

  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
        {this.renderContent()}
      </div>
    );
  }
}

ArticleViewer.propTypes = {
  article: PropTypes.object,
};

export default ArticleViewer;
