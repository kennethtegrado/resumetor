import { FunctionComponent, useEffect, useState } from 'react';

const ViewData: FunctionComponent<ViewDataProps> = ({ data }) => {
    return (
        <div className="viewdata">
            {data.map(({ key, value }: Fields, index: number) => (
                <div key={index} className="viewdata__content">
                    <h6 className="viewdata__title">{key}</h6>
                    <p className="viewdata__text text__body-2">{value}</p>
                </div>
            ))}
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
