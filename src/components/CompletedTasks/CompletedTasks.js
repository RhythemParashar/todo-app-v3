import React, {useState} from 'react';
import './CompletedTasks.css';
import { getItems, updateCompletedFlag, removeItemById, removeAllCompleted } from '../helper/localStorage';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const CompletedTasks = () => {
  const [buttonFlag, setButtonFlag] = useState(false);

  const handleCheckBox = (id) => {
    updateCompletedFlag(id);
    setButtonFlag(!buttonFlag);
  }

  const handleDeleteById = (id) => {
    removeItemById(id);
    setButtonFlag(!buttonFlag);
  }

  const handleAllDelete = () => {
    removeAllCompleted();
    setButtonFlag(!buttonFlag);
  }

  return (
    <div className='completed-list'>
      <ul className='taskList'>
        {getItems().map((item) => {
          if (item.isCompleted) {
            return (
              <li key={item.id} className='item-row-completed'>
                <div className='item-row-left'>
                  {item.isCompleted ? 
                    <input className='item-checkbox' type="checkbox" onClick={() => handleCheckBox(item.id)} checked/> :
                    <input className='item-checkbox' type="checkbox" onClick={() => handleCheckBox(item.id)} />}
                  
                  <span className={item.isCompleted ? 'task-completed' : null}>{item.task}</span>
                </div>
                <span onClick={() => handleDeleteById(item.id)} className='item-row-right'><DeleteOutlineIcon className='deleteIcon' /></span>
              </li>
            )
          }
          else {
            return null;
          }
        })}
      </ul>

      <div className='delete-button-section'>
        <button onClick={handleAllDelete} className='deleteAll-button'><DeleteOutlineIcon className='deleteAllIcon' />Delete all</button>
      </div>
    </div>
  )
}

export default CompletedTasks