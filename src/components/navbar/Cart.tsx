import style from './Cart.module.scss'
import useStore from '../../store/store'
import image from '@/assets/image-product-1-thumbnail.jpg'

import deleteIcon from '../../assets/icon-delete.svg'
import CartData from './CartData'

function Cart({ width }: { width: number }) {
  const store = useStore(state => ({
    cartProducts: state.cartProducts,
    setCart: state.setCart,
    isCartOpen: state.isCartOpen,
    setIsCartOpen: state.setIsCartOpen
  }))

  const containerStyle = {
    width: store.isCartOpen ? '350px' : 0,
    // transition: '1s'
  }
  // console.log(store)

  return (
    <section
      className={style.container}
      style={containerStyle}
    >
      {/* {store.isCartOpen ? */}
      {store.cartProducts.length > 0 ?
        <>
          <h1>Cart</h1>
          <div className={style.separator}></div>
          <div className={style['checkout-container']}>
            <CartData />
            <button type='button'>Checkout</button>
          </div>
        </>
        :
        <p>Your cart is empty!</p>
      }

    </section>
  )
}

export default Cart