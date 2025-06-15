import React from 'react';
import '../style/Header.css'

const AddButton = ({ onClick }) => (

    <button
        className='cat-add'
        onClick={onClick}
    >
        Добавить кота
    </button>
);

export default AddButton;