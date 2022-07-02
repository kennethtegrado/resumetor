import { PersonalLink } from '@interface/reactHookForm';

/**
 * It takes a link as a string, and returns an object with the original link and a shorthand version of
 * the link
 * @param {string} link - string - the link that you want to shorten
 * @returns An object with a url and shorthand property.
 */
const shortenLink = async (link: string): Promise<PersonalLink> => {
    const generatedLinkObject = { url: link, shorthand: '' };

    const shorthand = link.match(
        /(https?:\/\/)?(www.)?([a-zA-z0-9-]+)(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/
    );

    if (shorthand) {
        const newShorthand = shorthand.slice(3, 7).join('');
        generatedLinkObject.shorthand = newShorthand;
    }

    return generatedLinkObject;
};

export default shortenLink;
