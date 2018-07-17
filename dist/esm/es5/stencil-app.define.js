// StencilApp: Custom Elements Define Library, ES Module/ES5 Target
import { defineCustomElement } from './stencil-app.core.js';
import {
  MyApp
} from './stencil-app.components.js';

export function defineCustomElements(window, opts) {
  defineCustomElement(window, [
    MyApp
  ], opts);
}