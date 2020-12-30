import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-component',
  shadow: true,
  styleUrl: './my-component.css',
})
export class MyComponent {
  /**
   * the first name
   */
  @Prop() first: string;

  /**
   * the last name
   */
  @Prop() last: string;

  render() {
    return (
      <div>
        <span class="welcome">Hello</span>, my name is {this.first} {this.last}
      </div>
    );
  }
}
