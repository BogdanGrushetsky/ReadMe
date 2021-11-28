import { useEffect, useState } from 'react';
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

  const [curPassword, setCurPassword] = useState('')

  const [newPassword, setNewPassword] = useState('')
  const [repPassword, setRepPassword] = useState('')


  const handlePassSubmit = (e) => {
    e.preventDefault()
  }
  
  return(
    <form className="UserManage__form" onSubmit={handlePassSubmit}>
      <input className="UserManage__input" type="password" placeholder="Current Passoword"
        value={curPassword} onChange={(e)=>setCurPassword(e.target.value)}
      />
      <input className="UserManage__input" type="password" placeholder="New Password"
        value={newPassword} onChange={(e)=>setNewPassword(e.target.value)}
      />
      <input className="UserManage__input" type="password" placeholder="Repeat New Passowrd"
        value={repPassword} onChange={(e)=>setRepPassword(e.target.value)}
      />

      <button className="UserManage__button">Змінити</button>

    </form>
  )
}

const ProfileForm = (props) => {

  const [name, setName] = useState();

  const [surname, setSurname] = useState();

  const [email, setEmail] = useState();

  useEffect(()=> {
    setName(props.firstName || '');
    setSurname(props.lastName || '')
    setEmail(props.email || '')
  }, [])

  return (
    <>
    <form className="UserManage__form" onSubmit={(e)=>e.preventDefault()}>
        <input className='UserManage__input' type='text' placeholder='Dilara'
          value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <input className='UserManage__input' type='text' placeholder='Matraci'
          value={surname} onChange={(e)=>{setSurname(e.target.value)}}/>
        
        <input className='UserManage__input' type='email' placeholder='dmatraci@somemail.com'
          value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        
        <button className='UserManage__button'>Створити</button>
      
    </form>
    </>
  )
}


const UserManage = (props) => {

  const user = JSON.parse(localStorage.getItem('user')) || {};



  return ( 
  <>

  <h1 className="UserManage__title">User Management</h1>

    <Container 
      title="Profile" 
      description="Ім'я, фамілія, імейл адресса"
    > 
      <ProfileForm
        email={user.email} firstName={user.firstName} lastName={user.lastName}
      />
    </Container>

    <Container 
      title="Password" 
      description={"Ваша імейл адресса: " + user.email}
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