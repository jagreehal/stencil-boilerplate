(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1338:function(t,o,n){"use strict";n.r(o),function(t){var o=n(242),r=n(243),e=n(143).withStorySource;Object(o.storiesOf)("My App",t).addDecorator(e("import { storiesOf } from '@storybook/html';\nimport { withKnobs, text } from '@storybook/addon-knobs';\nstoriesOf('My App', module)\n  .addDecorator(withKnobs)\n  .add('Example', () => {\n    const first = text('First', 'Jag');\n    const last = text('Last', 'Reehal');\n    return `<my-app first=\"${first}\" last=\"${last}\" ></my-app>`;\n  });\n",{"My App@Example":{startLoc:{col:7,line:5},endLoc:{col:3,line:9}}})).addDecorator(r.withKnobs).add("Example",()=>{return`<my-app first="${Object(r.text)("First","Jag")}" last="${Object(r.text)("Last","Reehal")}" ></my-app>`})}.call(this,n(430)(t))},1339:function(t,o,n){var r={"./my-app/my-app.stories.tsx":1338};function e(t){var o=s(t);return n(o)}function s(t){var o=r[t];if(!(o+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return o}e.keys=function(){return Object.keys(r)},e.resolve=s,t.exports=e,e.id=1339},1356:function(t,o,n){"use strict";n.r(o),function(t){var o=n(242),r=n(1339);Object(o.configure)(function(){r.keys().forEach(function(t){return r(t)})},t)}.call(this,n(430)(t))},1358:function(t,o,n){n(529),n(1357),t.exports=n(1356)}},[[1358,1,2]]]);
//# sourceMappingURL=preview.a3f6a75d16bc182a30fc.bundle.js.map