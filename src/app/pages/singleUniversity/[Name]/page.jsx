import SingleUniversity from '@/_components/shared/SingleUniversity/SingleUniversity';
import React from 'react';

const page = ({ params }) => {
    return (
        <div>
            <SingleUniversity Name={params.Name}/>
        </div>
    );
};

export default page;