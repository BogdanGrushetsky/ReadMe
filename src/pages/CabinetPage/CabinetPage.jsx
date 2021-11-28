import React from 'react';
import LangNProgress from "./components/LanguageNProgress/LangNProg";
import TaskBox from "./components/TaskBox";

const CabinetPage = (props) => {
    return (
        <div>
            <LangNProgress login={props.login} />
            <TaskBox/>
        </div>
    );
};

export default CabinetPage;