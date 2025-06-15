import React from "react";
import '../style/Header.css'

const EmptyState = ({ onAddClick }) => (
    <div className='text-center'>
        <p>Нет ни одного кота</p>
        <button
            className='cat-add'
            onClick={onAddClick}
            >
            Добавить кота
        </button>
    </div>
);

export default EmptyState;