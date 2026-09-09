import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import ChildrenCard from './ChildrenCard/ChildrenCard';

const Children = () => {
    const dataOfChildren = useLoaderData();
    // console.log(dataOfChildren);
    return (
        <div>
            <div className='grid md:grid-cols-3 gap-5 mx-5 py-2'>
                {
                    dataOfChildren.map(data => <ChildrenCard key={data.id} data={data}></ChildrenCard>)
                }
            </div>
        </div>
    );
};

export default Children;