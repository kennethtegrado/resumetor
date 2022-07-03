import { SchoolSectionValues } from '@interface/reactHookForm';
/**
 * Sort the array of objects by the startYear property in ascending order.
 * @param {FieldValues} data - FieldValues[]
 */
const sortArrayEducationData = async (
    data: SchoolSectionValues[]
): Promise<void> => {
    data.sort((firstItem, secondItem) => {
        if (+firstItem.startYear > +secondItem.startYear) return -1;
        else if (+firstItem.startYear < +secondItem.startYear) return 1;
        else return 0;
    });
};

export default sortArrayEducationData;
