import style from './Drawer.module.scss'

import useStore from '../../store/store'
import Overlay from '../extra/Overlay'
import closeIcon from '../../assets/icon-close.svg'
import { Ref, RefObject, useEffect, useRef } from 'react'

type Drawer = {
  navLinks: string[]
}


function useOutsideAlerter(drawer: RefObject<HTMLDivElement>, closeDrawer: () => void) {
  useEffect(() => {
    function handleClickOutside(e: MouseEvent): void {
      if(drawer?.current && !drawer.current.contains(e.target as Element)) {
        closeDrawer()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
}


function Drawer({ navLinks }: Drawer) {
  const closeDrawer = useStore((state: { setIsDrawerOpen: any }) => state.setIsDrawerOpen)
  const drawerContainerClass = style['drawer-container']

  const drawer = useRef<HTMLDivElement>(null)

  useOutsideAlerter(drawer, closeDrawer)

  return (
    <Overlay>
      <div className={drawerContainerClass} ref={drawer}>
        <button type='button' onClick={closeDrawer}>
          <img src={closeIcon} alt="close"/>
        </button>
        <ul className={style.ul}>
          {navLinks.map((link: string) => 
            <li key={link}>
              <a href='#'>{link}</a>
            </li>
          )}
        </ul>
      </div>
    </Overlay>
  )
}

export default Drawer