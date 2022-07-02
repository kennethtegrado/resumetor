export interface ResumeHeaderValues {
    name: string;
    email: string;
    location: string;
    'job Position': string;
    number: string;
    link?: any;
}

export interface PersonalFields {
    key: string;
    value: string | PersonalLink;
}

export interface PersonalLink {
    url: string;
    shorthand: string;
}
