import tmp from "./template.js";

class Saturation extends HTMLElement {
    static get observedAttributes() {
        return ["color"]
    }
    get color() {
        return this.getAttribute("color");
    }
    set color(val) {
        this.setAttribute("color", val);
    }
    attributeChangedCallback(name, oldV, newV) {
        if (name === "color") {
            // this.color = newV;
            this.dom.el.style.backgroundImage = `linear-gradient(to right, transparent 0%, ${newV} 100%)`;
        }
    }
    connectedCallback() {
        this.attachShadow({mode: "open"});
        this.shadowRoot.innerHTML = tmp.render({color: this.color || "red"});
        this.dom = tmp.getDom(this.shadowRoot);
        console.log(this.dom);

    }
}

export default Saturation;
