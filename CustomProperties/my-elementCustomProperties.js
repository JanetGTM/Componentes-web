//Forma profesinal de crear un componente web - con slot
class myElement extends HTMLElement{
  constructor(){
    super();
    this.attachShadow({ mode: "open"});
  }
  getTemplate(){
    const template = document.createElement('template');
     template.innerHTML = `
      <section>
        <h1>
          <slot name="titulo"></slot>
        </h1>
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
      :host{
        --primary-color: tomato;
        --secondary-color: salmon;
        --terciary-color: cyan;
        --heading-primary: 30px;
        --heading-secondary: 25px;
        display: inline-block;
        width: 100%;
        min-width: 250px;
        max-width: 300px;
      }

      section{
        background: var(--primary-color);
      }
      section div{
        background: var(--secondary-color);
      }
      h1{
        font-size: var(--heading-primary);
      }
      p{
        font-size: var(--heading-secondary);
      }
      :host([titu]){
        color: var(--secondary-color); 
        background: var(--terciary-color);
      }
      
      </style>
    `;
      //se reescribirán los colores de los elementos que tengan el atributo titu a los definidos en los estilos globales unicamente en el elemento que se llame el cambio

  }
  render(){
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }
  connectedCallback(){
    this.render();
  }
} 
customElements.define("my-element", myElement);