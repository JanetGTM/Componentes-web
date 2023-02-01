class productCard extends HTMLElement{
  constructor(){
    super();
    this.attachShadow({mode: 'open'});
  }
  static get observedAttributes(){
    return ['img', 'titule','price', 'description','collection'];
  }
  attributeChangedCallback(attr, aldVal, newVal){
    if(attr === 'img'){
      this.img = newVal;
    }
    if(attr === 'titule'){
      this.titule = newVal;
    }
    if(attr === 'price'){
      this.price = newVal;
    }
    if(attr === 'description'){
      this.description = newVal;
    }
    if(attr === 'collection'){
      this.collection = newVal;
    }

  }
  getTemplate(){
    const template = document.createElement('template');
    template.innerHTML = `
      <main class="container">
        <section class="imgBox">
          <img src=${this.img} alt="Zapato teni para correr"/>
        </section>
        <section class="details">
          <div class="content">
            <h2>${this.titule} <span>${this.collection} </span></h2>
            <p>${this.description}</p>
            <h3>${this.price}</h3>
            <button>Comprar</button>
          </div>
        </section>
      </main>
      ${this.getStyles()}
      `;

    return template;
  }
  getStyles(){
    return `
      <style>

      :host (*){
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      :host{
        --primary-background: #5a6cb2;
        max-width: 650px;
        min-width: 550px;
        margin: 0 auto;
        flex: 1;
      }
      
      .container{
        border-radius: 18px;
        overflow: hidden;
        position: relative;
        display: flex;
        flex-wrap: wrap;
        //max-width: 650px;
        //min-width: 550px;
        //height: 500px;
        margin: 20px;
        background-color: #fff;
        box-shadow: 10px 10px 10px silver;
      }

      .container .imgBox{
        position: relative;
        display: flex;
        justify-content: center;
        width: 50%;
        height: auto;
        background-color: var(--primary-background);
      }
      .container .imgBox::before{
        position: absolute;
        top: 20px;
        left: 20px;
        font-size: 3em;
        font-weight: 800;
        color: #000;
        content: 'Kike';
        opacity: 0.1;
      }
      .container .imgBox img{
        position: relative;
        top: 10px;
        left: 0;
        right: 0;
        //width: 50%;
        //height: 50%;
        object-fit: contain;
        transform: rotate(0deg);
        width: -webkit-fill-available;
        margin: 10px;
      }
      .container .details{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 100%;
        box-sizing: border-box;
        padding: 20px;
      }

      .container .details h2{
        margin-bottom: 25px;
        font-size: 1.7em;
        line-height: 0.8em;
        color: var(--primary-background);
      }
      .container .details h2 span{
        font-size: 0.5em;
        line-height: .1em;
        text-transform: uppercase;
        letter-spacing: 2px;
        color: #999;
      }

      .container .details p{
        max-width: 85%;
        margin-left:0%;
        margin-bottom: 35px;
        color:#333;
        font-size: 16.5px;
      }

      .container .details h3{
        float: left;
        font-size: 1.8em;
        color: #a2a2a2;
        letter-spacing: -2px;
      }

      .container .details button{
        margin-top: 20px;
        float: right;
        padding: 15px 20px;
        font-size: 16px;
        color: #fff;
        letter-spacing: 1px;
        font-weight: 600;
        text-transform: uppercase;
        border-radius: 40px;
        background-color: var(--primary-background);
        cursor: pointer;
        border: 0;
        opacity: 0.7;
        box-shadow: 6px 6px 0px 0px rgba(0,0,0,.2),
        6px 6px 0px 0px var(--primary-background);
        transition: transform .3s,box-shadow .3s,-webkit-transform .3s;
      }
      .container .details button:hover{
        box-shadow: 0px 0px 0px 0px var(--primary-background);
        transform: translate(0, 7px);
      }
      @media(max-width: 1080px){

        .container{
          height: auto;
          width:auto;
        }
        .container .imgBox{
          padding: 40px;
          width:100%;
          box-sizing: border-box;
          height: auto;
          text-align: center;
        }
        .container .imgBox img{
          left: initial;
          width: 100%;
          height: auto;
          transform: rotate(0deg);
        }
      
        .container .details{
          width: 100%;
          height: auto;
          padding: 20px;
        }
        .container .details p{
          max-width: 100%;
          margin-left: 0;
        }
      
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
customElements.define('product-card', productCard);