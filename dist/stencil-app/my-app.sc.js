/*! Built with http://stenciljs.com */
const { h } = window.StencilApp;

class MyApp {
    render() {
        return (h("div", null,
            "Hello, my name is ",
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
    static get style() { return ""; }
}

export { MyApp };
