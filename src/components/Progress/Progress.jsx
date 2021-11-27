import React from 'react';
import progress from '../../img/Group 2929.svg'
import './Progress.scss'

const Progress = () => {
    return (
        <div className='progress-container'>
            <img src={progress}/>
        </div>
    );
};

export default Progress;