import { storiesOf } from '@storybook/html';

import { text } from '@storybook/addon-knobs';

storiesOf('My App', module).add('Example', () => {
  const first = text('First', 'Jag');
  const last = text('Last', 'Reehal');

  return `<my-app first="${first}" last="${last}" ></my-app>`;
});
