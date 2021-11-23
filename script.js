import Saturation from "./components/Saturation/index.js";
import Slider from "./components/Slider/index.js";

customElements.define("saturation-square", Saturation);
customElements.define("color-slider", Slider);

function getNumber(ma = 10, mi = 0) {
    return Math.floor(Math.random() * (ma - mi) + mi);
}
function getRGB(a = 256,b = 0) {
    return `rgb(${getNumber(a, b)}, ${getNumber(a, b)}, ${getNumber(a, b)})`;
}

function changeColor(el) {
    el.setAttribute("color", getRGB(256, 0));
}
let btn = document.createElement("button");
btn.innerText = "Поменять цвет";
btn.addEventListener("click", e => {
    changeColor(document.querySelector("saturation-square"));
});
document.body.append(btn);