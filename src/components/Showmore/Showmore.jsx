import React, { use } from 'react';

const Showmore = ({promiseData}) => {
    const {address, company} = use(promiseData)
    return (
        <div>
            <h1>
                Address: {address.city}
            </h1>
            <h1>
                Company: {company.name}
            </h1>
        </div>
    );
};

export default Showmore;