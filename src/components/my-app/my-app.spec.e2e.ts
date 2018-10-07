import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

async function getContentElement(element: E2EElement) {
  return await element.shadowRoot.querySelector('div');
}

describe('testing-e2e', () => {
  let page: E2EPage;
  let element: E2EElement;
  let contentElement: Element;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
      <my-app first="Peter" last="Parker"></my-app>
    `
    });
    element = await page.find('my-app');
  });

  it('should work with both the first and the last name', async () => {
    contentElement = await getContentElement(element);
    expect(contentElement).toEqualText('Hello, my name is Peter Parker');
  });

  it('should work with both the first and the last name', async () => {
    element.setProperty('first', 'Bruce');
    element.setProperty('last', 'Wayne');

    await page.waitForChanges();

    contentElement = await getContentElement(element);

    expect(contentElement).toEqualText('Hello, my name is Bruce Wayne');
  });
});
