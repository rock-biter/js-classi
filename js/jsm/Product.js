export default class Product {

  static instanceCount = 0

  /**
   * 
   * @param {string} name 
   * @param {string} description 
   * @param {number} price 
   * @param {string} image 
   */
  constructor(name,description,price,image) {
    this.name = name
    this.description = description
    this.price = price
    this.image = image
    this.id = ++Product.instanceCount

    this.createDomElement();
  }

  /**
   * create product card dom element
   */
  createDomElement() {

    this.domElement = document.createElement('div');
    this.domElement.className = 'card product-card';

    this.domElement.innerHTML = `
      <img class="product__image" src="${ this.image }" alt="">
      <h3 class="product__title flex justify-between">${ this.name } <span>${ this.price }</span></h3>
      <p class="product__description">${ this.description }</p>
    `

    const buyButton = document.createElement('button')
    buyButton.innerHTML = 'Add to cart'
    buyButton.classList.add('buy-button')

    this.domElement.appendChild( buyButton )

    buyButton.addEventListener('click',() => {
      const addToCartEvent = new CustomEvent('addToCart',{ detail: this });
      
      window.dispatchEvent( addToCartEvent, )

    })

  }

  static clone( { name, price, description, image } ) {

    return new this(name,description,price,image)

  }


}