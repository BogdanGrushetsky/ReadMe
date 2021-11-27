import "./Menu.css"
import user_placeholder from "./../../img/Menu/user_placeholder.svg"

const MenuItem = (props) => {
  return (
  <div className="Menu__item">
    <img src={props.src}/>
  </div>
  )
}

const Menu = (props) => {
  return (
    <div className="Menu">
      <div className="Menu__User">
        <img src={user_placeholder}/>
      </div>
      {props.children}
    </div>
  )
}

export { MenuItem };
export default Menu;