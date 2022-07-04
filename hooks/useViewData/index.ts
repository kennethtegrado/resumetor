import { useState } from 'react';

const useViewData = () => {
    const [viewData, setViewData] = useState<boolean>(false);

    return { viewData, setViewData };
};

export default useViewData;
