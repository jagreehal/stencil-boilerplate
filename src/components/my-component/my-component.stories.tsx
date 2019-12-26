import { text, withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import { html } from "lit-html";

export default {
  title: "Component",
  component: "my-component",
  decorators: [withKnobs, withA11y]
};

export const MyComponent = () => {
  const first = text("First", "Jag");
  const last = text("Last", "Reehal");
  return html`
    <my-component first="${first}" last="${last}"></my-component>
  `;
};
