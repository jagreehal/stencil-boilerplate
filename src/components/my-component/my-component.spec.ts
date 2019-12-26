import { MyComponent } from "./my-component";

describe("my-component", () => {
  it("should build", () => {
    expect(new MyComponent()).toBeTruthy();
  });
});
