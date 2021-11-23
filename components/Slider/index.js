import tmp from "./template.js";

class Slider extends HTMLElement {
    connectedCallback() {
        this.attachShadow({mode: "open"});
                this.shadowRoot.innerHTML = tmp.render({
            type: this.getAttribute("type"),
            color: this.getAttribute("rgb")
        });
        this.addEventListener("mousemove", this.handler);
    }
    getRGB(h, s, v) {
        let r, g, b, hue = h / 60, c = s * v, x;
        x = c * (1 - Math.abs(hue % 2 - 1));
        if (hue < 1 && hue >= 0) {
            r = c; g = x; b = 0;
        } else if (hue < 2) {
            r = x; g = c; b = 0;
        } else if (hue < 3) {
            r = 0; g = c; b = x;
        } else if (hue < 4) {
            r = 0; g = x; b = c;
        } else if (hue < 5) {
            r = x; g = 0; b = c;
        } else if (hue < 6) {
            r = c; g = 0; b = x;
        } else {
            r = 0; g = 0; b = 0;
        }
        return `rgb(${Math.floor(r * 256)}, ${Math.floor(g * 256)}, ${Math.floor(b * 256)})`;
    }
    handler(e) {
        const pos = e.clientX - e.target.getBoundingClientRect().x;
        const h = (pos / e.target.offsetWidth) * 360;
        document.body.querySelector("saturation-square").color = this.getRGB(h, 1, 1);
    }

}

export default Slider;