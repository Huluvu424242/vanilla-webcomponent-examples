const template = document.createElement('template');
template.innerHTML = `
<style>
p {
    color:blue;
}
div {
    color:red;
}
#text {
    background: lightgray;
}
</style>
        <h3>Light DOM Example</h3>
        <p>Innerer Text vor Slot gestyled background von außen und color von innen</p>
        <slot name="main"></slot>
        <p id="text">Innerer Text nach Slot gestyled background und color von innen, style innen überschreibt außen background</p>
`;

export class VwcSlotsLightdom extends HTMLElement {

    constructor() {
        super();
        this.appendChild(document.importNode(template.content, true));
    }

    async connectedCallback() {
        if(console){
            console.log("####vwc-slots-lightdom eingehängt");
        }
    }

}

window.customElements.define('vwc-slots-lightdom', VwcSlotsLightdom);
