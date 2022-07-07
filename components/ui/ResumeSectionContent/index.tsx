// Interface
import type { FunctionComponent, ReactNode } from 'react';
import type {
    PersonalFields,
    SchoolSectionValues,
} from '@interface/reactHookForm';

// MUI Import
import { CardContent } from '@mui/material';

// Hooks
import useViewData from '@hooks/useViewData';
import useSectionData from '@hooks/useSectionData';

// Component Import
import DataLists from '../DataLists';

// Recoil
import { RecoilRoot } from 'recoil';

const ResumeSectionContent: FunctionComponent<ResumeSectionContentProps> = ({
    type = 'header',
    children,
}) => {
    const { viewData, setViewData } = useViewData();
    const { sectionData, updateSectionData } = useSectionData();

    const openViewData = () => {
        setViewData(true);
    };

    const closeViewData = () => {
        setViewData(false);
    };

    return (
        <RecoilRoot>
            {' '}
            <CardContent>
                {viewData ? (
                    <DataLists
                        type={type}
                        data={sectionData}
                        hideData={closeViewData}
                    />
                ) : (
                    children
                )}
            </CardContent>
        </RecoilRoot>
    );
};

export default ResumeSectionContent;

interface ResumeSectionContentProps {
    type: 'education' | 'experience' | 'skill' | 'header';
    form: FunctionComponent<{
        showData: () => void;
        updateSectionData: (
            data: Array<PersonalFields | SchoolSectionValues>
        ) => void;
    }>;
    children: ReactNode;
}
