import { useState } from 'react';

import type {
    PersonalFields,
    SchoolSectionValues,
} from '@interface/reactHookForm';

const useSectionData = () => {
    const [sectionData, setSectionData] = useState<
        Array<PersonalFields | SchoolSectionValues>
    >([]);

    const updateSectionData = (
        data: Array<PersonalFields | SchoolSectionValues>
    ) => {
        setSectionData(data);
    };

    return { sectionData, updateSectionData };
};

export default useSectionData;
