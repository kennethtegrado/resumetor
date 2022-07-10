import type { FunctionComponent } from 'react';

// Component Import
import { HeaderForm, ResumeSection } from '@components/ui';

// HOC Import
import { withSubmitHandler } from '@utils';

const ResumeHeader: FunctionComponent = () => {
    const FormComponent = withSubmitHandler(HeaderForm, 'header');
    return (
        <ResumeSection type="header" title="Resume Header">
            <FormComponent />
        </ResumeSection>
    );
};

export default ResumeHeader;
