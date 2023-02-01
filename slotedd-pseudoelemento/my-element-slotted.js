//Forma profesionañ de crear un  componente wen con slot y styles :slotted
class myElement extends HTMLElement{
  constructor(){
    super();
    this.attachShadow({mode: "open"});
  }
  getTemplate(){
    const template = document.createElement('template');
    template.innerHTML = `
      <section>
      <h2>
        <slot name="titulo"></slot>
      </h2>
      <div>
        <p>
        <slot name="parrafo"></slot>
        </p>
      </div>
      </section>
      ${this.getStyles()}
    
    `;
    return template;
  }
  getStyles(){
    return `
      <style>
        ::slotted(span){
          color: red;
          font-size: 20px;
        }

        ::slotted(.text){
          color: blue;
        }

      </style>
    `;
  }
  render(){
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }
  connectedCallback(){
    this.render();
  }
}

customElements.define("my-element", myElement);