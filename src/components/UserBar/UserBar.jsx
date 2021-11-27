import { useState } from "react"

import "./UserBar.css"
import avatar_placeholder from "./../../img/UserBar/avatar_placeholder.svg"
import notification from "./../../img/UserBar/notification.svg"

const UserBar = (props) => {
  const [notifications, setNotifications] = useState(false);

  return (
    <div className="UserBar">
        <p className="UserBar__name">Shambhavi Mishra</p>
        <img src={avatar_placeholder} className="UserBar__avatar"/>
        <div className="UserBar__notifications">
          <div className="UserBar__circle" 
            style={ notifications ? {display:'block'} : {display: 'none'}}
          />
          <img src={notification}/>
        </div>

    </div>
  )
}

export default UserBar;