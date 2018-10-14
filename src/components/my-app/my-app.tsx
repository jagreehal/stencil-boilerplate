import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-app',
  styleUrl: 'my-app.css',
  shadow: true
})
export class MyApp {
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
