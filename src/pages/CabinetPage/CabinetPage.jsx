import React from 'react';
import LangNProgress from "./components/LanguageNProgress/LangNProg";
import TaskBox from "./components/TaskBox";
import dogPhoto from '../../img/dogphoto.png';

const CabinetPage = (props) => {
    return (
        <div>
            <LangNProgress login={props.login} />
            <TaskBox/>
            <div style={{position: "absolute", left: '757px', top:'820px' }}>
                <img src={dogPhoto}/>
            </div>
        </div>
    );
};

export default CabinetPage;