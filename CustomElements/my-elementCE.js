// Crear un componente web usando Customelements
const template = document.createElement('div');
template.innerHTML = `
<style>
  .texto{
    color: red;
  }
  p{
    color: blue;
  }
</style>
<p class="texto" >Hola mundo 2</p>
<p>Texto ejemplo para la clase</p>
`;

class myElement extends HTMLElement{
  constructor(){
  super();
  console.log("Hello word");
  this.p = document.createElement("p");   //Forma 1 de crear un componente web: Reservar el espacio en memoria para el elemento
  }
  connectedCallback(){
    this.p.textContent = "¡¡Hello word!!";   //Forma 1 de crear un web component: asignarle un contenido
    this.appendChild(this.p)  //Forma 1 de crar un componente web: agregarlo al DOM
    this.appendChild(template);
  }
}
customElements.define("my-element", myElement);