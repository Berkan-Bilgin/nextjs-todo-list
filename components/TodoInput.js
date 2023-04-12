import React, { useState } from 'react';
const TodoInput = ({addTodo}) => {
    const [inputValue, setInputValue] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() === ''){
            return;
        }
    

    addTodo(inputValue);
    setInputValue('');
}

const handleInputChange = (e) => {
    setInputValue(e.target.value);
};

return (
    <form className="todoinput" onSubmit={handleSubmit}>
  <input
    className="todoinput__input"
    type="text"
    value={inputValue}
    onChange={handleInputChange}
    placeholder="Yeni görev ekle"
  />

  <button className="todoinput__button" type="submit">
    Ekle
  </button>
</form>
)
};

export default TodoInput;