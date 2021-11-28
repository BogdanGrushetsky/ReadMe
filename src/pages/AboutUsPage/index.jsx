import './about_us.css'

import NavBar from '../UserPage/components/NavBar/NavBar'

import readme from './img/readme.svg'

import ivan from './img/ivan.svg'
import sasha from './img/sasha.svg'
import karina from './img/karina.svg'
import bogdan from './img/bogdan.svg'
import roman from './img/roman.svg'

import smile from './img/smile.svg'


const AboutUs = (props) => {
  return (
  <>
  <NavBar/>

  <div className="aboutUs__main">

  <div className="company_info">
    <div className="company_info__text">
      <h1>ReadMe</h1>
      <p>Якщо життя підсовує вам лимон —</p>
      <p>зробіть з нього лимонад🍋</p>
    </div>
    <div className="company_info__separator">
    </div>
    
    <img className="company_info__organization" alt="organization" src={readme}/>
  
  </div>

  <div className="developers">
    <img className="developers__main_emoji" alt='smile' src={smile}/>
    <h1 className="developers__title">РОЗРОБНИКИ:</h1>
    
    <div className="developers__column_container">
      <div className="developers__column">

        <div className="developers__employee_container">
          <img className="developers__emoji" alt='smile' src={karina}/>
          <div className="developers__employee_container_description">
            <h1>НЕСКОРОЖЕНА КАРИНА</h1>
            <h2>FRONTEND DEVELOPER</h2>
            <p>СТУДЕНТКА НУЛП</p>
          </div>
        </div>

        <div className="developers__employee_container">
          <img className="developers__emoji" alt='smile' src={bogdan}/>

          <div className="developers__employee_container_description">
            <h1>Грушецький Богдан</h1>
            <h2>FRONTEND DEVELOPER</h2>
            <p>СТУДЕНТ ІФНТУНГ</p>
          </div>
        </div>
        
        <div className="developers__employee_container">
          <img className="developers__emoji" alt='smile' src={roman}/>

          <div className="developers__employee_container_description">
            <h1>Горський Роман</h1>
            <h2>FRONTEND DEVELOPER</h2>
            <p>СТУДЕНТ КНУ</p>
          </div>
        </div>

      </div>
      <div className="developers__column">

        <div className="developers__employee_container">
          <img className="developers__emoji" src={sasha}/>

          <div className="developers__employee_container_description">
            <h1>Корнійчук Олександр</h1>
            <h2>Full stack developer in SoftServe</h2>
            <p>СТУДЕНТ НУЛП</p>
          </div>

        </div>


        <div className="developers__employee_container">
          <img className="developers__emoji" src={ivan}/>

          <div className="developers__employee_container_description">
            <h1>Шафран Іван</h1>
            <h2>Frontend developer</h2>
            <p>СТУДЕНТ НУЛП</p>
          </div>

        </div>

      </div>

    </div>
  </div>


</div>
<div className="aboutme__bg_graph"> 
  
</div>
</>
)
}

export default AboutUs;