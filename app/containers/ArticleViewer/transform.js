import React from 'react';
// import { convertNodeToElement } from 'react-html-parser';

import ArticleP from 'components/ArticleP';

/*
 * Map certain HTML elements to different React components.
 * https://github.com/wrakky/react-html-parser#transform-function
 *
 * Returning a React component renders that component in place of the node.
 * Returning undefined uses the default component.
 */

// map tag names to custom components
const components = {
  p: ArticleP,
//   'h1': ArticleH1,
//   'h2': ArticleH2,
//   'h3': ArticleH3,
//   'h4': ArticleH4,
//   'h5': ArticleH5,
//   'h6': ArticleH6,
//   'code': ArticleCode,
//   'pre': ArticleCode, // <pre> maps to <ArticleCode>
//   'a': ArticleA,
//   'img', ArticleImg,
//   'em': ArticleEm,
//   'strong': ArticleStrong,
//   'i': ArticleEm,
//   'b': ArticleStrong,
};

export default function transform(node) {
  // modify only certain tags (as opposed to text or other nodes)
  if (node.type === 'tag') {
    const name = node.name;
    const Component = components[name];

    if (typeof Component !== 'undefined') {
      // const children = node.children.map((c) => transform(c));
      return (
        <Component />
      );
    }

    // const n = node;
    // let newName = node.name;

    // switch (node.name) {
    //   case 'pre':
    //     newName = 'code';
    //     break;
    //   default:
    // }

    // n.name = newName;
    // return convertNodeToElement(n, index, transform);
  }
  return undefined;
}
