import style from './Overlay.module.scss'

function Overlay(props) {
  const overlay = style.overlay
  return (
    <div className={overlay}>
      {props.children}
    </div>
  )
}

export default Overlay