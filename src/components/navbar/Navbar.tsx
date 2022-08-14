import { useEffect, useState } from 'react'
import styles from './Navbar.module.scss'

import useStore from '../../store/store'
import menu from '../../assets/icon-menu.svg'
import cart from '../../assets/icon-cart.svg'
import avatar from '../../assets/image-avatar.png'
import logo from '../../assets/logo.svg'
import Links from './Links'
import Drawer from './Drawer'

const navLinks = ['Collections', 'Men', 'Women', 'About']

function Navbar() {

  const store = useStore(state => state)


  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    function handleResize(): void {
      if(window.innerWidth < 800) {
        setIsMobile(true)
        if(!store.isDrawerOpen) store.setIsDrawerOpen
        console.log('isDrawerOpen', store.isDrawerOpen)
      }
      else {
        setIsMobile(false)
        if(store.isDrawerOpen) store.setIsDrawerOpen
        console.log('isDrawerOpen', store.isDrawerOpen)
      }
      // console.log('2', store.isDrawerOpen, isMobile)
    }
    handleResize()
    
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className={styles['navbar-py-1']}>
      {isMobile && store.isDrawerOpen && <Drawer navLinks={navLinks} />}
      <div className={styles['border']}>
        <div className={styles['navbar-container']}>
            <div className={[styles['logo-container']].join(' ')}>
              {isMobile && 
                <button type='button' aria-label='menu' onClick={store.setIsDrawerOpen}>
                  <img src={menu} alt="menu" className={[].join(' ')}/>
                </button>
              }
              
              {/* <div className={[styles['logo-div']].join(' ')}> */}
                {!isMobile ? 
                  <>
                    <img className={[styles['logo'], styles['mobile']].join(' ')} src={logo} alt="sneakers"/>          
                    <Links navLinks={navLinks} /> 
                  </>
                    : 
                  <img className={[styles['logo'], styles['mobile']].join(' ')} src={logo} alt="sneakers"/>          
                }
              {/* </div> */}
            </div>
            
            <div className={[styles['cart-container']].join(' ')}>
              <img src={cart} alt="cart"/>
              <img className={styles['avatar']} src={avatar} alt="avatar"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar