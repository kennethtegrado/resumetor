import { FunctionComponent, useEffect, useState } from 'react';

const ViewData: FunctionComponent<ViewDataProps> = ({ data }) => {
    return (
        <>
            {data.map(({ key, value }: Fields, index: number) => (
                <div key={index}>
                    <h6>{key}</h6>
                    <p className="text__body-2">{value}</p>
                </div>
            ))}
        </>
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
