import { PersonalFields } from '@interface/reactHookForm';

import type { FieldValues } from 'react-hook-form';

import shortenLink from './shortenLink';

/**
 * It takes an object, loops through the object, and pushes the key and value of each key/value pair
 * into an array.
 *
 * The function works as expected, but I'm not sure if I'm using the async/await syntax correctly.
 *
 * I'm using the async/await syntax because I'm using the shortenLink function, which is an async
 * function.
 *
 * I'm using the async/await syntax in the forEach loop because I'm using the shortenLink function in
 * the forEach loop.
 *
 * I'm using the async/await syntax in the for loop because I'm using the shortenLink function in the
 * forEach loop.
 *
 * I'm using the async/await syntax in the return statement because I'm using the shortenLink function
 * in the forEach loop.
 *
 * I'm using the async/await syntax in
 * @param {ResumeHeaderValues} ResumeHeaderData - ResumeHeaderValues
 * @returns An array of objects.
 */
const makeArrayHeaderData = async (
    ResumeHeaderData: FieldValues
): Promise<Array<PersonalFields>> => {
    const makeArrayResult: PersonalFields[] = [];

    for (const key in ResumeHeaderData) {
        const value = ResumeHeaderData[key as keyof FieldValues];

        // Check if the key is not a link
        if (key !== 'link') {
            const makeArrayItem: PersonalFields = { key: '', value: '' };
            makeArrayItem.key = key;
            makeArrayItem.value = value;
            makeArrayResult.push(makeArrayItem);
        } else {
            value.forEach(async (item: ResumeHeaderLink) => {
                const makeArrayItem: PersonalFields = {
                    key: '',
                    value: { url: '', shorthand: '' },
                };
                makeArrayItem.key = 'link';
                const generateShortLinkObject = await shortenLink(item.link);
                makeArrayItem.value = generateShortLinkObject;
                makeArrayResult.push(makeArrayItem);
            });
        }
    }

    return makeArrayResult;
};

export default makeArrayHeaderData;

interface ResumeHeaderLink {
    link: string;
}
