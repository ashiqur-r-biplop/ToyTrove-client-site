import React from 'react';
import { useLocation } from 'react-router-dom';

const DataNotAvailable = () => {
    const location = useLocation()
    console.log(location);
    return (
        <div className='w-full flex justify-center items-center' style={{height: "80vh"}}>
            <h1>Data Not Available</h1>
        </div>
    );
};

export default DataNotAvailable;