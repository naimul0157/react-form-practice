import React from 'react';

const Teacher = ({teacher}) => {
    const {id,title} = teacher;
    // console.log(title);
    return (
        <div className='border border-green-400 rounded-xl px-5 py-3'>
           <h1>
                UserId: {id}
           </h1>
           <h1>
            Title: {title}
           </h1>
        </div>
    );
};

export default Teacher;