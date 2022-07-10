import type { FunctionComponent } from 'react';
import type { SubmitHandler, FieldValues } from 'react-hook-form';
import type { SchoolSectionValues } from './reactHookForm';

export type SectionTypes = 'education' | 'header' | 'experience' | 'skill';
export interface FormComponentProps {
    submitHandler: SubmitHandler<FieldValues>;
    viewSectionContent: boolean;
}

export type FormData = SchoolSectionValues[];
export type FormComponent = FunctionComponent<FormComponentProps>;
export type sortKey = 'startYear';
