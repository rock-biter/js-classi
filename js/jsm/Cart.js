export default class Cart {

  products = []
  total = 0

  /**
   * 
   * @param {string} selector 
   */
  constructor( selector ) {

    this.domElement = document.querySelector( selector )

    window.addEventListener('addToCart',(event) => {

      this.addProduct( event.detail )
    })

  }

  /**
   * 
   * @param {object} product 
   */
  addProduct( product ) {

    if(this.products.length === 0) {
      this.domElement.querySelector('.products-list').innerHTML = ''
    }

    const cartProduct = {...product}
    console.log('cart product',cartProduct)

    this.products.push( cartProduct )

    this.total += product.price;

    this.render()

  }

  /**
   * 
   * @param {object} product 
   */
  removeProduct( product ) {

    const i = this.products.indexOf(product)

    if( i >= 0 ) {
      this.products.splice(i,1)
    }

    this.total -= product.price

    this.render()
  }

  getTotal() {
    return this.total
  }

  printTotal() {
    this.domElement.querySelector('.total').innerHTML = `${ this.getTotal().toFixed(2) } &euro;`
  }

  printProductDetail( product ) {

    
    const li = document.createElement('li')
    li.className = 'cart-product'

    li.innerHTML = `
      <img class="w-8 h-8 object-cover object-center" src="${ product.image }" alt="">
      ${ product.name } <span class="price">${ product.price } &euro;</span>
    `

    const xIcon = document.createElement('span')
    xIcon.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
      `

    li.appendChild(xIcon)
    xIcon.addEventListener('click', () => {

      li.remove()
      this.removeProduct(product)

    })

    this.domElement.querySelector('.products-list').appendChild( li );

  }

  empty() {
    this.products = []
    this.total = 0
    
    this.render()
    
  }

  render() {

    this.printTotal()

    if( this.products.length === 0 ) {
      this.domElement.querySelector('.products-list').innerHTML = '-- Empty -- '
      return 
    } 

    this.domElement.querySelector('.products-list').innerHTML = ''

    this.products.forEach(product => {
      this.printProductDetail( product )
    });


  }
}