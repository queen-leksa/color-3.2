export default {
    render(pr) {
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