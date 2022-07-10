import { SchoolSectionValues } from '@interface/reactHookForm';

const sortArrayData = async (
    data: Array<SchoolSectionValues>,
    sortKey: 'startYear'
): Promise<Array<SchoolSectionValues>> => {
    const copyData = data.slice();

    copyData.sort((firstItem, secondItem) => {
        let firstKey = +firstItem?.[sortKey];
        let secondKey = +secondItem?.[sortKey];

        if (firstKey > secondKey) return -1;
        else if (firstKey < secondKey) return 1;
        else return 0;
    });

    return copyData;
};

export default sortArrayData;
