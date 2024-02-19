class RoundCheckbox extends HTMLElement {
  constructor() {
    super();
    const template = document.getElementById("round-checkbox-template").content;
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(template.cloneNode(true));
  }
}
customElements.define("round-checkbox", RoundCheckbox);
