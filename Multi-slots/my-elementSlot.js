//Forma profesinal de crear un componente web - con multislot
//Las etiquetas slots en JS tendrán el atributo name que deberá ser igual al atributo slot del HTML global para poder vincularse
class myElement extends HTMLElement{
  constructor(){
  super();
  this.attachShadow({ mode: "open"});
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
      h2{
        color: red;
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