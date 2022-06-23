import type { FunctionComponent, ReactNode } from 'react';

// Icon Import
import { HiPencil } from 'react-icons/hi';

// Component Import
import { SectionTitle } from '@components/ui';

const Section: FunctionComponent<SectionProps> = ({
    title,
    editableTitle,
    children,
}) => {
    return (
        <section className="section__container">
            <SectionTitle title={title} editableTitle={editableTitle} />
            <div>{children}</div>
        </section>
    );
};

export default Section;

interface SectionProps {
    title?: string;
    editableTitle?: boolean;
    children: ReactNode;
}
