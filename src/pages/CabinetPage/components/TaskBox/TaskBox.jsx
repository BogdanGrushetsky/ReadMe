import React from 'react';
import './TaskBox.css'

const url = 'http://127.0.0.1:5500/?'

const TaskBox = () => {

    const genTasks = (amount) => {
        const arr = []
        const titles = ["Списки", "Маінпейдж", "Заголовок", "Векторна піраміда", "Вектор" ]

        for (let i=0; i < amount; i++) {
            arr[i] = (<div className='task-name'> 
                        <a href={url + 'id='+i}> Завдання "{titles[i]}" </a>
                    </div>)
        }

        return arr;
    }

    const tasks = genTasks(5);

    return (
        <div className='task-container'>
            <div className='task-header'>
                Завдання
            </div>
            <div className='task-content'>
                {
                  tasks  
                }
            </div>
        </div>
    );
};

export default TaskBox;