import { render, flush } from '@stencil/core/testing';
import { MyApp } from './my-app';

describe('my-app', () => {
  it('should build', () => {
    expect(new MyApp()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [MyApp],
        html: '<my-app><my-app>'
      });
    });

    it('should work with both the first and the last name', async () => {
      element.first = 'Peter';
      element.last = 'Parker';
      await flush(element);
      expect(element.textContent).toEqual('Hello, my name is Peter Parker');
    });
  });

  describe('passing in props', () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [MyApp],
        html: '<my-app first="Peter" last="Parker"><my-app>'
      });
    });

    it('should be able to pass in prop values in tests', async () => {
      await flush(element);
      expect(element.textContent).toEqual('Hello, my name is Peter Parker');
    });
  });
});
