import { TestWindow } from '@stencil/core/testing';
import { MyApp } from './my-app';

describe('my-app', () => {
  it('should build', () => {
    expect(new MyApp()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    let window;

    beforeEach(async () => {
      window = new TestWindow();
      element = await window.load({
        components: [MyApp],
        html: '<my-app></my-app>'
      });
    });

    it('should work with both the first and the last name', async () => {
      element.first = 'Peter';
      element.last = 'Parker';
      await window.flush();
      expect(element.textContent).toEqual('Hello, my name is Peter Parker');
    });
  });
});
