import React from 'react';
import { useCats } from '../hooks/useCats.jsx';
import EmptyState from './EmptyState.jsx';
import CatList from './CatList.jsx';
import AddButton from './AddButton.jsx';
import Loader from './Loader.jsx';


export default function App() {
    const { cats, loading, error, addCat, deleteCat } = useCats();

    return (
        <div className='text'>
            {loading && <Loader />}
            {error && <div className='err'>{error}</div>}

            {cats.length === 0 && !loading ? (
                <EmptyState onAddClick={addCat} />
            ) : (
                <>
                    <AddButton onClick={addCat} />
                    <CatList cats={cats} onDelete={deleteCat} />
                </>
            )}
        </div>
    );
}