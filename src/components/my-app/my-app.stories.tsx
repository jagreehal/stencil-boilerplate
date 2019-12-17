import { text, withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import { html } from "lit-html";

export default {
  title: "Component",
  decorators: [withKnobs, withA11y],
  parameters: {
    options: { selectedPanel: "storybook/a11y/panel" }
  }
};

export const MyApp = () => {
  const first = text("First", "Jag");
  const last = text("Last", "Reehal");
  return html`
    <my-app first="${first}" last="${last}"></my-app>
  `;
};
