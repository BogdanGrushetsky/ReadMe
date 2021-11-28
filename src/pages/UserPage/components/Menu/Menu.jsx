import "./Menu.css"
import user_placeholder from "./../../../../img/Menu/user_placeholder.svg"

import dashboard from "./../../../../img/Menu/dashboard.svg"
import people from "./../../../../img/Menu/people.svg"
import settings from "././../../../../img/Menu/settings.svg"
import logoutIcon from '../../../../img/Menu/Vector (4).svg'

import { useNavigate } from 'react-router-dom'

const MenuItem = (props) =>{
    const navigate = useNavigate();
  return (
  <div  onClick={() => navigate(props.nav)} className="Menu__item">
    <img src={props.src}/>
  </div>
  )
}


const Menu = (props) => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('user')
        navigate('/login')
    }
  return (
    <div className="Menu">
      <div className="Menu__User">
        <img src={user_placeholder}/>
      </div>
      <MenuItem src={dashboard} nav={`/cabinet`} />
      <MenuItem src={people} nav={`/tasks`}/>
      <MenuItem src={settings} nav={`/settings`}/>
        <div onClick={logout}>
            <MenuItem src={logoutIcon} nav={`/login`} />
        </div>
    </div>
  )
}

export { MenuItem };
export default Menu;