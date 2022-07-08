// Interface
import type { FunctionComponent } from 'react';
import type { FormComponent, SectionTypes } from '@interface/sections';
import type {
    PersonalFields,
    SchoolSectionValues,
} from '@interface/reactHookForm';
import type { SubmitHandler, FieldValues } from 'react-hook-form';

// Atom
import { sectionContentState, viewSectionContentState } from '@atom';
import { useSetRecoilState, useRecoilState } from 'recoil';

// Utils Function
import makeArrayHeaderData from 'utils/makeArrayHeaderData';

const SubmitFormHandler = (
    FormComponent: FormComponent,
    type: SectionTypes
) => {
    const Component: FunctionComponent = () => {
        const setSectionContentState = useSetRecoilState(sectionContentState);
        const [viewSectionSectionState, setViewSectionContentState] =
            useRecoilState(viewSectionContentState);

        const submitHandler: SubmitHandler<FieldValues> = async (data) => {
            if (type === 'header')
                setSectionContentState(await makeArrayHeaderData(data));
            else
                setSectionContentState(
                    data as Array<PersonalFields | SchoolSectionValues>
                );
            setViewSectionContentState(true);
        };
        return (
            <FormComponent
                submitHandler={submitHandler}
                viewSectionContent={viewSectionSectionState}
            />
        );
    };

    return Component;
};

export default SubmitFormHandler;
