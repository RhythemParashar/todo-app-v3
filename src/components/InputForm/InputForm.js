import React, { useState } from 'react';
import './InputForm.css';
import { dispatchItem } from '../helper/localStorage';

const InputForm = ({handleClick, buttonFlag}) => {

  const [inputValue, setInputValue] = useState('');

  const handleInput = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = () => {

    handleClick(!buttonFlag);

    let todoItem = {
      task: inputValue,
      isCompleted: false
    }
    dispatchItem(todoItem);

    setInputValue('');
  }

  return (
    <div className='InputForm'>
        <input type="text" placeholder='add details' onChange={handleInput} value={inputValue} />
        <button onClick={handleSubmit}>Add</button>
    </div>
  )
}

export default InputForm