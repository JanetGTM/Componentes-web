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
      :host{
        display: inline-block;
        width: 100%;
        min-width: 300px;
        max-width: 450px;
        font-size: 20px;
        background: pink;     
        color: red;
        padding: 20px;
      }
      :host(.blue), :host([yellow]) h2{
        background: blue;
      }
      :host(.blue) h2, :host([yellow]) h2{
        color: cyan;
      }
      :host(.blue) p{
        color: yellow;
      }
      :host([yellow]){
        background: yellow;
      }
      :host-context(article.card){
        display: block;
        max-width: 100%;
        background: orange;
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