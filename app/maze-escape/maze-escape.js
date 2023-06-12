import "/components/maze-escape/maze-escape.js";

export default class MazeEscape extends crsbinding.classes.ViewBase {
    async connectedCallback() {
        await super.connectedCallback();
        console.log("MazeEscape");
    }

    async disconnectedCallback() {
        await super.disconnectedCallback();
    }

};