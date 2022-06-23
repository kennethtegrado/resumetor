import type { FunctionComponent } from 'react';

const Section: FunctionComponent<SectionProps> = ({ title }) => {
    return (
        <section className="section__container">
            <div>
                <h4 className="section__title">{title}</h4>
            </div>
        </section>
    );
};

export default Section;

interface SectionProps {
    title: string;
}
