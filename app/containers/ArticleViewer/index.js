/**
*
* ArticleViewer
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
// import styled from 'styled-components';

// import renderHTML from 'react-render-html';
import ReactHtmlParser from 'react-html-parser';

import messages from './messages';
import transform from './transform';

import './themes/default.scss';

class ArticleViewer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  getThemeClass() {
    let theme = 'default';
    if (this.props.theme) {
      theme = this.props.theme;
    }
    return `theme-${theme}`;
  }

  renderContent() {
    if (this.props.article !== null) {
      const renderOptions = {
        decodeEntities: true,
        transform,
      };

      return ReactHtmlParser(this.props.article.content, renderOptions);
      // return renderHTML(this.props.article.content);
    }
    return '';
  }

  render() {
    return (
      <article className={this.getThemeClass()}>
        <FormattedMessage {...messages.header} />
        {this.renderContent()}
      </article>
    );
  }
}

ArticleViewer.propTypes = {
  article: PropTypes.object,
  theme: PropTypes.string,
};

export default ArticleViewer;
