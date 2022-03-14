
import Product from './jsm/Product.js'
import Cart from './jsm/Cart.js'

const cart = new Cart('#cart')

console.log(cart)

const products = [
  new Product('Monitor','Monitor bellissimo',759.99,'img/monitor.jpg'),
  new Product('Mouse','Mouse bellissimo',19.99,'img/mouse.png'),
  new Product('Tastiera','Tastiera bellissima',156.99,'img/tastiera.jpg'),
  new Product('Casse wireless','Casse da panico',365.99,'img/casse-jbl.jpg'),
]

console.log(products)

const cardWrapperElement = document.querySelector('.card-wrapper')

products.forEach( product => cardWrapperElement.appendChild( product.domElement ))

document.getElementById('paga').addEventListener('click',() => {

  cart.empty() 

})
