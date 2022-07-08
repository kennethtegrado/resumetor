// Interface Import
import type { FunctionComponent, ReactNode } from 'react';
import { SectionTypes } from '@interface/sections';

// MUI IMPORT
import { Card, Button, Divider } from '@mui/material';

// Component Import
import { SectionTitle } from '@components/ui';
import ResumeSectionContent from '../ResumeSectionContent';

const ResumeSection: FunctionComponent<SectionProps> = ({
    title,
    editableTitle,
    children,
    type = 'header',
    remove,
}) => {
    return (
        <>
            {remove && (
                <Button variant="outlined" sx={{ px: 2 }} onClick={remove}>
                    Remove Section
                </Button>
            )}
            <Card sx={{ p: 5 }}>
                <SectionTitle
                    title={title}
                    editableTitle={editableTitle}
                    type={type}
                />
                <Divider variant="middle" />
                <ResumeSectionContent type={type}>
                    {children}
                </ResumeSectionContent>
            </Card>
        </>
    );
};

export default ResumeSection;

interface SectionProps {
    title?: string;
    editableTitle?: boolean;
    children: ReactNode;
    type?: SectionTypes;
    remove?: () => void;
}
