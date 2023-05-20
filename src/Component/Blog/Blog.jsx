import React from 'react';
import useTitle from '../CustomeHook/Hook';

const Blog = () => {
    useTitle("Blog")
    return (
        <div>
            <h1>this is my blog page</h1>
        </div>
    );
};

export default Blog;