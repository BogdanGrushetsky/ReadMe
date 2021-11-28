import style from "./NavBar.css"
import logo from "./../../../../img/NavBar/logo_with_name.svg"

const Link = (props) => {
  return <a className="NavBar__link" href={props.href}>{props.children}</a>
}

const NavBar = (props) => {
  return (
    <nav className="NavBar">
      <div className="NavBar__container"> 
        <Link href="/aboutUs">Про нас</Link>
        <Link href="/settings">Налаштування</Link>
        <Link href="/cabinet">Особистий кабінет</Link>
        <div className="NavBar_Burger"/>
        
        <img src={logo} className="NavBar__logo"/>
      </div>

    </nav>
  )
}

export default NavBar