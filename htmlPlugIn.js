class Warning extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: 'open'});

        this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
            padding: 10px;
            border: 1px solid #ccc;
            background-color: #f0f0f0;
            color: red;
          }
        </style>
        <p>No Parking Available</p>
      `;
    }
}

customElements.define('no-parking', Warning);