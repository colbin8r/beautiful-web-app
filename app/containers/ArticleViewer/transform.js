import { convertNodeToElement } from 'react-html-parser';

/*
 * Map certain HTML elements to different React components.
 * https://github.com/wrakky/react-html-parser#transform-function
 */
export default function transform(node, index) {
  // modify only certain tags (as opposed to text or other nodes)
  if (node.type === 'tag') {
    const n = node;
    let newName = node.name;

    switch (node.name) {
      case 'pre':
        newName = 'code';
        break;
      default:
    }

    n.name = newName;
    return convertNodeToElement(n, index, transform);
  }
  return undefined;
}
