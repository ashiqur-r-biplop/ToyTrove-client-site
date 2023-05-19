import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const SingleToy = useLoaderData()
    console.log(SingleToy);
    return (
        <div>
            
        </div>
    );
};

export default Details;