import React from 'react';
import add from '../../img/Vector.png'
import html from '../../img/bar_chart 1.png'
import css from '../../img/design 1.png'
import './LanguageCode.css'



const LanguageCode = ({login}) => {

    const redirectToTasks = () => {
        if(!localStorage.getItem('accessToken')){
            login()
        }
    }

    return (
        <div className='language-container'>
            <div className='language-header'>
                <div className='language-title'> Мови кодінгу</div>
            </div>
            <div className='language-content'>
                <div className='language-block' onClick={redirectToTasks}>
                    <img className='icon' src={html}/>
                    <div className='language-name'>HTML</div>
                </div>
                <div className='language-block' onClick={redirectToTasks}>
                    <img className='icon' src={css}/>
                    <div className='language-name'>СSS</div>
                </div>
                <div className='language-block'>
                    <div className='add-icon'>
                        <img src={add} onClick={redirectToTasks}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LanguageCode;