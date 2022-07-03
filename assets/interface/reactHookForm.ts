export interface ResumeHeaderValues {
    name: string;
    email: string;
    location: string;
    'job Position': string;
    number: string;
    link?: any;
}

export interface EducationSectionValues {
    education: SchoolSectionValues[];
}

export interface SchoolSectionValues {
    school: string;
    location: string;
    startYear: number;
    endYear: number;
    subsection?: SchoolSubsectionValues[];
}

export interface SchoolSubsectionValues {
    title: string;
    content: string;
}

export interface PersonalFields {
    key: string;
    value: string | PersonalLink;
}

export interface PersonalLink {
    url: string;
    shorthand: string;
}
