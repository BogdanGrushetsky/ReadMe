import { useState } from 'react';
import './UserManage.css';

const Container = (props) => {
  //false for closed, true for open
  const [arrowState, setArrowState] = useState(true);

  return (
    <>
    <div className="UserManage__container">
      <div className="UserManage__container_text">
        <h2>{props.title}</h2>
        <p>{props.description}</p>

      </div>
    <div className={"UserManage__arrow " + (arrowState ? 'up': 'down')}
         onClick={() => setArrowState(!arrowState)}/>
    </div>
    <div>
      {arrowState ?props.children: ''}
    </div>
    <hr/>
    </>
  )
}


const NotificationsForm = (props) => {
  return (
    <form className="UserManage__checkbox_form">
      <input className="UserManage__checkbox" id='notif' type="checkbox" name='notif' />
      <label for="notif">Receive weekly digest mails</label>
    </form>
  )
}

const PasswordForm = (props) => {
  return(
    <form className="UserManage__form">
      <input className="UserManage__input" type="password" placeholder="strongPassword"/>
      <input className="UserManage__input" type="password" placeholder="strongPassword"/>

      <button className="UserManage__button">Submit</button>

    </form>
  )
}

const ProfileForm = (props) => {
  return (
    <>
    <form className="UserManage__form">
        <input className='UserManage__input' type='text' placeholder='Dilara'/>
        <input className='UserManage__input' type='text' placeholder='Matraci'/>
        <input className='UserManage__input' type='email' placeholder='dmatraci@somemail.com'/>
        
        <button className='UserManage__button'>Submit</button>
      
    </form>
    </>
  )
}


const UserManage = (props) => {
  return ( 
  <>

  <h1 className="UserManage__title">User Management</h1>

    <Container 
      title="Profile" 
      description="Name, Surname, Email address"
    > 
      <ProfileForm/>
    </Container>

    <Container 
      title="Password" 
      description="Your email address is dmataraci@gmail.com"
    > 
      <PasswordForm/>
    </Container>

    <Container 
      title="Notifications" 
      description="Rateit will send you notifications"
    > 
      <NotificationsForm/>

    </Container>
    
  </>)
}


export default UserManage;