import tmp from "./template.js";

class Slider extends HTMLElement {
    connectedCallback() {
        this.attachShadow({mode: "open"});
        this.shadowRoot.innerHTML = tmp.render({});
    }
}

export default Slider;