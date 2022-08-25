import products from '@/data/products.json'
import { Product, CartProduct } from '../../models/products'

import deleteIcon from '../../assets/icon-delete.svg'
import useStore from '../../store/store'
import style from './CartData.module.scss'


function CartData() {
  const store = useStore(state => ({
    // cartProducts: state.cartProducts
    cartProducts: state.cartProducts
  }))

  
  // product to be shown in small cart component
  const frontCartProduct = store.cartProducts[0]
  const toShowProduct: Product = products.filter((item: Product) => item.id === store.cartProducts[0].id)[0]
  const frontImg = toShowProduct.images.filter(img => img.id === 1 && img.isThumbnail === true)[0]
  const priceToShow = toShowProduct.price * toShowProduct.discount
  const totalPrice = priceToShow * frontCartProduct.pieces

  // const ft = require(frontImg.url)

  console.log('products json', toShowProduct, frontImg)

  const cdClass = `${style['cartData']}`
  const descClass = `${style['desc']}`
  return (
    <div>
      <div className={cdClass}>
        <img src={frontImg.url} alt="product image" />
        <div className={descClass}>
          <span>{toShowProduct.name}</span>
          <span>${priceToShow} x {frontCartProduct.pieces} 
            <span>
              ${totalPrice}
            </span>
          </span>
        </div>
      </div>
      <img src={deleteIcon} alt="delete" />
    </div>
    
  )
    
}

export default CartData