export default {
    render(pr) {
        return `
            ${this.html(pr)}
            ${this.css(pr)}
        `
    },
    getDom(self) {
        let bgElement = self.querySelector(".bg-x");
        let thumb = self.querySelector(".thumb");
        return {el: bgElement, thumb: thumb};
    },
    html(pr) {
        return `
            <div class="bg bg-x"></div>
            <div class="bg bg-y"></div>
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
                }
                .bg-x {
                    background-image: linear-gradient(to right, transparent 0%, ${pr.color} 100%);
                }
                .bg-y {
                    background-image: linear-gradient(to bottom, transparent 0%, #000 100%);
                }
                .thumb {
                    width: 4px;
                    height: 4px;
                    border: #fff 1px solid;
                    position: absolute;
                    top: calc(50% - 3px);
                    left: calc(50% - 3px);
                    border-radius: 50%;
                }
            </style>
        `
    }
}