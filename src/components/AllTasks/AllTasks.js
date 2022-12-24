import React, { useState } from 'react';
import './AllTasks.css';
import InputForm from '../InputForm/InputForm';
import { getItems, updateCompletedFlag } from '../helper/localStorage';

const AllTasks = () => {

  const [buttonFlag, setButtonFlag] = useState(false);
  const [checkBoxValue, setCheckBoxValue] = useState(false);

  const handleCheckBox = (id) => {
    updateCompletedFlag(id);
    setCheckBoxValue(!checkBoxValue);
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
                <input className='item-checkbox' type="checkbox" onChange={() => handleCheckBox(item.id)} defaultChecked={true}/> :
                <input className='item-checkbox' type="checkbox" onChange={() => handleCheckBox(item.id)} />}
               
              <span className={item.isCompleted ? 'task-completed' : null}>{item.task}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default AllTasks