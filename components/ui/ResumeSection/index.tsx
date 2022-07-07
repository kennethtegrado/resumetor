// Interface Import
import type { FunctionComponent, ReactNode } from 'react';
import type {
    PersonalFields,
    SchoolSectionValues,
} from '@interface/reactHookForm';

// MUI IMPORT
import { Card, CardContent, Button } from '@mui/material';

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
    const [FormComponent]: [
        FunctionComponent<{
            showData: () => void;
            updateSectionData: (
                data: Array<PersonalFields | SchoolSectionValues>
            ) => void;
        }>
    ] = children;
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
                <ResumeSectionContent form={FormComponent} type={type} />
            </Card>
        </>
    );
};

export default ResumeSection;

interface SectionProps {
    title?: string;
    editableTitle?: boolean;
    children: ReactNode;
    type?: 'education' | 'experience' | 'skill' | 'header';
    remove?: () => void;
}
