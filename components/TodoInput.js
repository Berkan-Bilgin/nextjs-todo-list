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
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder='Yeni görev ekle'
        />
        
        <button type="submit">Ekle</button>
    </form>
)
};

export default TodoInput;