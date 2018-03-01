/**
 *
 * Asynchronously loads the component for ArticleViewer
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
