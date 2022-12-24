import React, {useState} from 'react';
import './ActiveTask.css';
import InputForm from '../InputForm/InputForm';
import { getItems, updateCompletedFlag } from '../helper/localStorage';

const ActiveTask = () => {
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
          if (!item.isCompleted) {
            return (
              <li key={item.id} className='item-row'>
                {item.isCompleted ? 
                  <input className='item-checkbox' type="checkbox" onClick={() => handleCheckBox(item.id)} checked/> :
                  <input className='item-checkbox' type="checkbox" onClick={() => handleCheckBox(item.id)} />}
                 
                <span className={item.isCompleted ? 'task-completed' : null}>{item.task}</span>
              </li>
            )
          }
          else {
            return null;
          }
        })}
      </ul>
    </div>
  )
}

export default ActiveTask