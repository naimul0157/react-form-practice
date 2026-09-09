import React from 'react';
import { useLoaderData } from 'react-router';
import Teacher from './Teacher/Teacher';

const Teachers = () => {
    const teacherData  = useLoaderData();
    // console.log(teacherData);
    return (
        <div className='grid md:grid-cols-3 gap-5 mx-5 mt-5'>
            {
                teacherData.map(teacher => <Teacher key={teacher.id} teacher={teacher}></Teacher>)
            }
        </div>
    );
};

export default Teachers;