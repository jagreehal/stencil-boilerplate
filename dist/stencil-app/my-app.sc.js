/*! Built with http://stenciljs.com */
const { h } = window.StencilApp;

class MyApp {
    render() {
        return (h("div", null,
            h("span", { class: "welcome" }, "Hello"),
            ", my name is ",
            this.first,
            " ",
            this.last));
    }
    static get is() { return "my-app"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "first": {
            "type": String,
            "attr": "first"
        },
        "last": {
            "type": String,
            "attr": "last"
        }
    }; }
    static get style() { return "\n\@custom-media --large-viewport (min-width: 1000px);\n\n[data-my-app-host] {\n  color: var(--main, #ffd700);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.welcome[data-my-app] {\n  color: var(--welcome, #000);\n}\n\n\@media (min-width: 1000px) {\n\n.welcome[data-my-app] {\n    color: var(--welcome-large, #ff41b4)\n}\n  }\n"; }
}

export { MyApp };
