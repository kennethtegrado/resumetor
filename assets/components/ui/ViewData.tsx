import { FunctionComponent, useEffect, useState } from 'react';

import { makeArray } from '@utils';
const ViewData: FunctionComponent<ViewDataProps> = ({ data }) => {
    const [fields, setFields] = useState<Fields | any>([]);

    // Use Effect
    useEffect(() => {
        (async () => {
            const dataArray = await makeArray(data);
            setFields(dataArray);
        })();
    }, [data]);

    return (
        <div>
            {fields.length &&
                fields.map((item: Fields, index: number) => {
                    <div key={index}>
                        <h6>{item.key}</h6>;<p>{item.value}</p>;
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
