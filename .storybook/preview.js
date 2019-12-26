/* global window */

import {
  configure,
  addDecorator,
  setCustomElements,
  addParameters
} from "@storybook/web-components";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";

import customElements from "../dist/docs/custom-elements.json";

setCustomElements(customElements);

addDecorator(withKnobs);
addDecorator(withA11y);

addParameters({
  docs: {
    inlineStories: false
  }
});

const req = require.context("../src/components", true, /.stories.(tsx|mdx)$/);
configure(req, module);
if (module.hot) {
  module.hot.accept(req.id, () => {
    const currentLocationHref = window.location.href;
    window.history.pushState(null, null, currentLocationHref);
    window.location.reload();
  });
}
