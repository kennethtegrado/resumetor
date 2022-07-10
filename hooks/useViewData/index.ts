import { useState, useEffect } from 'react';

const useViewData = (onCallValue: boolean = false) => {
    const [viewData, setViewData] = useState<boolean>(false);

    useEffect(() => {
        setViewData(onCallValue);
    }, [onCallValue]);

    return { viewData, setViewData };
};

export default useViewData;
