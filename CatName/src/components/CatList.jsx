import React from 'react';
import '../style/CatList.css'; // Правильный импорт CSS-файла

const CatList = ({ cats, onDelete }) => {
    return (
        <div className="cat-list-container">
            {cats.map(cat => (
                <div key={cat.id} className="cat-card">
                    <img
                        src={cat.imageUrl}
                        alt={`Кот ${cat.name}`}
                        className="cat-image"
                    />
                    <div className="cat-info">
                        <h3 className="cat-name">{cat.name}</h3>
                        <button
                            onClick={() => onDelete(cat.id)}
                            className="delete-button"
                        >
                            ×
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CatList;