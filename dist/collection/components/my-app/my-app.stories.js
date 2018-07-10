import { storiesOf } from '@storybook/html';
import { withKnobs, text, } from '@storybook/addon-knobs';
storiesOf('My App', module)
    .addDecorator(withKnobs)
    .add('Example', () => {
    const first = text('First', 'Jag');
    const last = text('Last', 'Reehal');
    return (`<my-app first="${first}" last="${last}" ></my-app>`);
});
//# sourceMappingURL=my-app.stories.js.map