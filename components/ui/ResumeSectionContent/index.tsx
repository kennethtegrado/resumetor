// Interface
import type { FunctionComponent, ReactNode } from 'react';
import { SectionTypes } from '@interface/sections';

// MUI Import
import { CardContent } from '@mui/material';

// Component Import
import DataLists from '../DataLists';

// Recoil
import { RecoilRoot } from 'recoil';

const ResumeSectionContent: FunctionComponent<ResumeSectionContentProps> = ({
    type = 'header',
    children,
}) => {
    return (
        <RecoilRoot>
            <CardContent>
                <DataLists type={type} />
                {children}
            </CardContent>
        </RecoilRoot>
    );
};

export default ResumeSectionContent;

interface ResumeSectionContentProps {
    type: SectionTypes;
    children: ReactNode;
}
