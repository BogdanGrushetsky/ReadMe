import React from 'react';
import './TaskBox.css'

const TaskBox = () => {
    return (
        <div className='task-container'>
            <div className='task-header'>
                Завдання
            </div>
            <div className='task-content'>
                <div className='task-block'>
                    <div className='task-name'> Task 1</div>
                </div>
                <div className='task-block'>
                    <div className='task-name'> Task 2</div>
                </div>
                <div className='task-block'>
                    <div className='task-name'> Task 3</div>
                </div>
                <div className='task-block'>
                    <div className='task-name'> Task 3</div>
                </div>
                <div className='task-block'>
                    <div className='task-name'> Task 3</div>
                </div>
            </div>
        </div>
    );
};

export default TaskBox;