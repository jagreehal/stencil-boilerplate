import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "my-component",
  shadow: true,
  styleUrl: "./my-component.css"
})
export class MyComponent {
  @Prop()
  first: string;
  @Prop()
  last: string;

  render() {
    return (
      <div>
        <span class="welcome">Hello</span>, my name is {this.first} {this.last}
      </div>
    );
  }
}
