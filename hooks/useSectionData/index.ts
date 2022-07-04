import { useState } from 'react';

import type {
    PersonalFields,
    SchoolSectionValues,
} from '@interface/reactHookForm';

const useViewData = () => {
    const [sectionData, setSectionData] = useState<
        Array<PersonalFields | SchoolSectionValues>
    >([]);

    return { sectionData, setSectionData };
};

export default useViewData;
