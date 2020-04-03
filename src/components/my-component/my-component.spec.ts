import { newSpecPage } from "@stencil/core/testing";
import { MyComponent } from "./my-component";

describe("my-component", () => {
  it("should render my component", async () => {
    const page = await newSpecPage({
      components: [MyComponent],
      html: `<my-component first="Peter" last="Parker"></my-component>`,
    });
    expect(page.root).toEqualHtml(`
      <my-component first="Peter" last="Parker">
        <mock:shadow-root>
          <div>
            <span class="welcome">
              Hello
            </span>
            , my name is Peter Parker
          </div>
        </mock:shadow-root>
      </my-component>
  `);
  });
});
