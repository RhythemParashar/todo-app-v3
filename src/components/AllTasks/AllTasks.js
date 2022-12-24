import React, { useState } from 'react';
import './AllTasks.css';
import InputForm from '../InputForm/InputForm';
import { getItems, updateCompletedFlag } from '../helper/localStorage';

const AllTasks = () => {

  const [buttonFlag, setButtonFlag] = useState(false);

  const handleCheckBox = (id) => {
    updateCompletedFlag(id);
    setButtonFlag(!buttonFlag);
  }

  return (
    <div>
      <InputForm handleClick={setButtonFlag} buttonFlag={buttonFlag} />
      <ul className='taskList'>
        {getItems().map((item) => {
          return (
            <li key={item.id} className='item-row'>
              {item.isCompleted ? 
                <input className='item-checkbox' type="checkbox" onClick={() => handleCheckBox(item.id)} checked/> :
                <input className='item-checkbox' type="checkbox" onClick={() => handleCheckBox(item.id)} />}
               
              <span className={item.isCompleted ? 'task-completed' : null}>{item.task}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default AllTasks