// Interface
import type { FunctionComponent } from 'react';
import type { FormComponent, SectionTypes, sortKey } from '@interface/sections';
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
import sortArrayData from 'utils/sortArrayData';

const SubmitFormHandler = (
    FormComponent: FormComponent,
    type: SectionTypes
) => {
    const Component: FunctionComponent = () => {
        const setSectionContentState = useSetRecoilState(sectionContentState);
        const [viewSectionSectionState, setViewSectionContentState] =
            useRecoilState(viewSectionContentState);

        let sortKey: sortKey = 'startYear';

        const submitHandler: SubmitHandler<FieldValues> = async (data) => {
            let processedData: Array<PersonalFields | SchoolSectionValues> = [];
            switch (type) {
                case 'header':
                    processedData = await makeArrayHeaderData(data);
                    break;
                case 'education':
                    processedData = await sortArrayData(
                        data.education,
                        sortKey
                    );
                    break;
            }
            setSectionContentState(processedData);
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
