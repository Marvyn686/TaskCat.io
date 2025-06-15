import React from 'react';
import {SquareLoader} from 'react-spinners'
import '../style/Header.css'

const Loader = () => {
    return (
        <div className='loading-center'>
            <SquareLoader

                className='gradient-dots'
                color='transparent'
                loading
                size={70}
                speedMultiplier={2}

            />
        </div>
    );
};

export default Loader;