/*! Built with http://stenciljs.com */
import { h } from './stencil-app.core.js';
var MyApp = /** @class */ (function () {
    function MyApp() {
    }
    MyApp.prototype.render = function () {
        return (h("div", null, h("span", { class: "welcome" }, "Hello"), ", my name is ", this.first, " ", this.last));
    };
    Object.defineProperty(MyApp, "is", {
        get: function () { return "my-app"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyApp, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyApp, "properties", {
        get: function () {
            return {
                "first": {
                    "type": String,
                    "attr": "first"
                },
                "last": {
                    "type": String,
                    "attr": "last"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyApp, "style", {
        get: function () { return "\n\@custom-media --large-viewport (min-width: 1000px);\n\n[data-my-app-host] {\n  color: var(--main, #ffd700);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.welcome[data-my-app] {\n  color: var(--welcome, #000);\n}\n\n\@media (min-width: 1000px) {\n\n.welcome[data-my-app] {\n    color: var(--welcome-large, #ff41b4)\n}\n  }\n"; },
        enumerable: true,
        configurable: true
    });
    return MyApp;
}());
export { MyApp };
