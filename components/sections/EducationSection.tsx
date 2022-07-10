import type { FunctionComponent } from 'react';
import { Fragment } from 'react';

// Component Import
import { EducationForm, ResumeSection } from '@components/ui';

const EducationSection: FunctionComponent<EducationSectionProps> = ({
    remove: removeSection,
}) => {
    return (
        <ResumeSection
            type="education"
            title="Education"
            editableTitle
            remove={removeSection}
        >
            <EducationForm />
        </ResumeSection>
    );
};
export default EducationSection;

interface EducationSectionProps {
    remove: () => void;
}
