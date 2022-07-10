import { atom } from 'recoil';

// Interface import
import type {
    PersonalFields,
    SchoolSectionValues,
} from '@interface/reactHookForm';

export default atom({
    key: 'sectionContent' as 'sectionContent',
    default: [] as Array<PersonalFields | SchoolSectionValues>,
});
