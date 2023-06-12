export class MazeEscape extends HTMLElement {

    get html() {
        return import.meta.url.replace(".js", ".html");
    }

    constructor() {
        super();
        this.attachShadow({mode:"open"});
    }

    async connectedCallback() {
        this.shadowRoot.innerHTML = await fetch(this.html).then(result => result.text());
        await this.load();
    }

    async load() {
        requestAnimationFrame(() => {
            const gridContainer = this.shadowRoot.querySelector('.grid-container');
            const totalRows = 50;
            const totalColumns = 50;

            for (let row = 0; row < totalRows; row++) {
                for (let col = 0; col < totalColumns; col++) {
                    const cell = document.createElement('div');
                    cell.classList.add('grid-item');
                    cell.dataset.id = `cell-${row}-${col}`;
                    gridContainer.appendChild(cell);
                }
            }

        })
    }

    async disconnectedCallback() {
    }



}

customElements.define("maze-escape", MazeEscape);