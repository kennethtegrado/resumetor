import type { FunctionComponent } from 'react';

// React Hook Imports
import { useState, useRef, useEffect } from 'react';

// React Hook Form
import { useForm } from 'react-hook-form';

// Icon Import
import { HiPencil } from 'react-icons/hi';

const SectionTitle: FunctionComponent<SectionTitleProps> = ({
    title = 'Section Title',
    editableTitle,
}) => {
    // useForm
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    /* Destructuring the register function and assigning the ref to the input and the rest of the
   properties to the input. */
    const { ref, ...rest } = register(title.split(' ').join('-'), {
        required: 'Please put a section title.',
    });

    // Input Ref
    const inputRef = useRef<HTMLInputElement | null>(null);

    // States
    const [showTitle, setShowTitle] = useState(true);
    const [sectionTitle, setSectionTitle] = useState(title);

    // UseEffect
    useEffect(() => {
        if (!showTitle) inputRef.current?.focus();
    }, [showTitle]);

    // Click Edit Button Function
    const clickEdit = () => {
        setShowTitle(false);
    };

    // Change Title Function
    const changeTitle = (data: any) => {
        setSectionTitle(data[title.split(' ').join('-')]);
        setShowTitle(true);
    };

    return (
        <form onSubmit={handleSubmit(changeTitle)}>
            {showTitle && (
                <h4 className="section__title">
                    {sectionTitle}
                    {editableTitle && (
                        <span
                            className="section__edit-title"
                            onClick={clickEdit}
                        >
                            <HiPencil className="section__edit-title-icon" />
                        </span>
                    )}
                </h4>
            )}
            {!showTitle && (
                <>
                    <label
                        htmlFor={title.split(' ').join('-')}
                        className="section__change-title-label text__subtitle-2"
                    >
                        Section title
                    </label>
                    <input
                        type="text"
                        className="section__change-title"
                        {...rest}
                        ref={(e) => {
                            ref(e);
                            inputRef.current = e;
                        }}
                    />
                    <p className="section__change-title-error text__caption">
                        {errors?.[title.split(' ').join('-')]?.message}
                    </p>
                </>
            )}
        </form>
    );
};

export default SectionTitle;

interface SectionTitleProps {
    title?: string;
    editableTitle?: boolean;
}
