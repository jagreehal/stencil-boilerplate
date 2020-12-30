/* global window */

import {
  configure,
  addDecorator,
  setCustomElements,
  addParameters,
} from '@storybook/web-components';
import customElements from '../dist/docs/custom-elements.json';
// import customElements from "../docs-vscode.json";

setCustomElements(customElements);

addParameters({
  docs: {
    inlineStories: false,
  },
  a11y: {},
});

const req = require.context('../src/components', true, /.stories.(tsx|mdx)$/);
configure(req, module);
if (module.hot) {
  module.hot.accept(req.id, () => {
    const currentLocationHref = window.location.href;
    window.history.pushState(null, null, currentLocationHref);
    window.location.reload();
  });
}

export const parameters = {
  controls: { expanded: true },
};
