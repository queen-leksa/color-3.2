export default {
    render(pr) {
        console.log(pr);
        return `
            ${this.html(pr)}
            ${this.css(pr)}
        `
    },
    html(pr) {
        return `
            <div class="bg"></div>
            <div class="thumb"></div>
        `
    },
    css(pr) {
        return `
            <style>
                :host {
                    position: relative;
                    overflow: hidden;
                    background-color: #fff;
                }
                .bg {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    background-image: ${
                        pr.type === "hue" ?
                            `linear-gradient(to right,
                                             #f00 0%,
                                             #ff0 16%,
                                             #0f0 33%,
                                             #0ff 50%,
                                             #00f 66%,
                                             #f0f 83%,
                                             #f00 100%)`
                        :  `linear-gradient(45deg, #ccc 25%, transparent 25%),
                            linear-gradient(-45deg, #ccc 25%, transparent 25%),
                            linear-gradient(45deg, transparent 75%, #ccc 75%),
                            linear-gradient(-45deg, transparent 75%, #ccc 75%)`
                    };
                    background-size: ${pr.type === "hue" ? "cover" : "20px 20px"};
                    background-position: ${pr.type === "hue" ? "center" : "0 0, 0 10px, 10px -10px, -10px 0"};
                }
                .bg::before {
                    display: block;
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-image: linear-gradient(to right, transparent 0%, ${pr.type === "hue" ? "transparent" : pr.color} 100%);
                }
                .thumb {
                    width: 8px;
                    height: 100%;
                    border: #fff 1px solid;
                    position: absolute;
                    top: -1px;
                    left: calc(50% - 4px);
                    border-radius: 4px;
                    box-shadow: inherit;
                }
            </style>
        `
    }
}