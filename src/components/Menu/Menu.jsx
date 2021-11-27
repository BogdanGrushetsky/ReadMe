import "./Menu.css"

const MenuItem = (props) => {
  return (
  <div className="Menu__item">
    <img className="Menu__item" src={props.children}/>
  </div>
  )
}

const Menu = (props) => {
  return (
    <div className="Menu">
      {props.children}
    </div>
  )
}

export { MenuItem };
export default Menu;