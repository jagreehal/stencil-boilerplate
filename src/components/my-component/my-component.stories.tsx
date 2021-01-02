import { html } from 'lit-html';

export default {
  title: 'Controls Example',
  component: 'my-component',
  parameters: { options: { selectedPanel: 'storybookjs/control/panel' } },
};

export const MyComponent = (args) =>
  html`<my-component first="${args.first}" last="${args.last}"></my-component>`;

MyComponent.args = {
  first: 'Jag',
  last: 'Reehal',
};
