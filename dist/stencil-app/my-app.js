/*! Built with http://stenciljs.com */
const { h, Context } = window.StencilApp;

class MyApp {
    render() {
        if (this.first && this.last) {
            return (h("div", null,
                "Hello, my name is ",
                this.first,
                " ",
                this.last));
        }
    }
    static get is() { return "my-app"; }
    static get properties() { return { "first": { "type": String, "attr": "first" }, "last": { "type": String, "attr": "last" } }; }
    static get style() { return ":host {\n  display: block;\n  /* by default, custom elements are display: inline */\n}"; }
}

export { MyApp };
