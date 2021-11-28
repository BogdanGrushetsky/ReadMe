import React from 'react';
import LangNProgress from "./components/LanguageNProgress/LangNProg";
import TaskBox from "./components/TaskBox";
import dogPhoto from '../../img/dogphoto.png';
import './CabinetPage.css'

const CabinetPage = (props) => {

    const res = JSON.parse(localStorage.getItem('user'));

    if(res) {
    }


    return (
        <div>
            {res &&  <div className='cabinet-greetings'>
                Привіт, {res.firstName || `xedfxt`}!
                </div> }

            <div className='cabinet-ques'>Як твій день?</div>
            <LangNProgress login={props.login} />
            <TaskBox/>
            <div style={{position: "absolute", left: '757px', top:'820px' }}>
                <img src={dogPhoto}/>
            </div>
        </div>
    );
};

export default CabinetPage;