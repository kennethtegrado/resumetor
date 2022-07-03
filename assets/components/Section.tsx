import type { FunctionComponent, ReactNode } from 'react';

// MUI IMPORT
import { Card, CardContent } from '@mui/material';

// Component Import
import { SectionTitle } from '@components/ui';

const Section: FunctionComponent<SectionProps> = ({
    title,
    editableTitle,
    children,
    type,
}) => {
    return (
        <Card sx={{ p: 5 }}>
            <SectionTitle
                title={title}
                editableTitle={editableTitle}
                type={type}
            />
            <CardContent>{children}</CardContent>
        </Card>
    );
};

export default Section;

interface SectionProps {
    title?: string;
    editableTitle?: boolean;
    children?: ReactNode;
    type?: 'education' | 'experience' | 'skill';
}
