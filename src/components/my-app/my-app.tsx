import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-app',
  shadow: true,
  styleUrl: './my-app.css'
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
