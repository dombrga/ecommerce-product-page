import style from './Cart.module.scss'
import useStore from '../../store/store'

import deleteIcon from '../../assets/icon-delete.svg'

function Cart() {
  const store = useStore(state => ({cart: state.cart, setCart: state.setCart}))
  console.log(store)
  return (
    <section className={style.container}>
      {store.cart.length > 0 ? 
        <>
          <h1>Cart</h1>
          <div className={style.separator}></div>
          <div className={style['checkout-container']}>
            <div>
              <div>
                {/* product goes here */}
              </div>
              <img src={deleteIcon} alt="delete"/>
            </div>
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