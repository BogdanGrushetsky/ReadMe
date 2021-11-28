import "./Menu.css"
import user_placeholder from "./../../../../img/Menu/user_placeholder.svg"

import dashboard from "./../../../../img/Menu/dashboard.svg"
import people from "./../../../../img/Menu/people.svg"
import settings from "././../../../../img/Menu/settings.svg"

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
      <MenuItem src={dashboard} />
      <MenuItem src={people} />
      <MenuItem src={settings} />
    </div>
  )
}

export { MenuItem };
export default Menu;