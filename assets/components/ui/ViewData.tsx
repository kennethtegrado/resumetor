import { FunctionComponent, useEffect, useState } from 'react';

const ViewData: FunctionComponent<ViewDataProps> = ({ data }) => {
    console.log(data);
    return (
        <div>
            {data.map((item: Fields, index: number) => {
                <div key={index}>
                    <h6>{item.key}</h6>
                    <p>{item.value}</p>
                </div>;
            })}
        </div>
    );
};

export default ViewData;

interface ViewDataProps {
    data: any;
}

interface Fields {
    key: string;
    value: string;
}
