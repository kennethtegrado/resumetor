import type { FunctionComponent } from 'react';
import type { SubmitHandler, FieldValues } from 'react-hook-form';

export type SectionTypes = 'education' | 'header' | 'experience' | 'skill';
export interface FormComponentProps {
    submitHandler: SubmitHandler<FieldValues>;
    viewSectionContent: boolean;
}

export type FormComponent = FunctionComponent<FormComponentProps>;
