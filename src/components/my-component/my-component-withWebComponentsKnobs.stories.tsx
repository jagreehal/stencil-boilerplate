import { html } from 'lit-html';
import { withWebComponentsKnobs } from 'storybook-addon-web-components-knobs';
import { withKnobs } from '@storybook/addon-knobs';
export default {
  title: 'withWebComponentsKnobs',
  component: 'my-component',
  decorators: [withKnobs, withWebComponentsKnobs],
  parameters: { options: { selectedPanel: 'storybookjs/knobs/panel' } },
};

export const MyComponent = () =>
  html`<my-component first="Jag" last="Reehal"></my-component>`;
