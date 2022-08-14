import style from './Links.module.scss'



function Links({ navLinks }) {
  return (
    <nav className={['nav', style['nav']].join(' ')}>
      <ul className={style.ul}>
        {navLinks.map((link: string) => 
          <li key={link}>
            <a href='#'>{link}</a>
          </li>        
        )}
        </ul>
      
    </nav>
  )
}

export default Links