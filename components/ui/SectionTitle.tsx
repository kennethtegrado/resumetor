import type { FunctionComponent } from 'react';

// React Hook Imports
import { useState, useRef, useEffect } from 'react';

// React Hook Form
import { useForm } from 'react-hook-form';

import { CardHeader, IconButton, TextField, Typography } from '@mui/material';

// Icon Import
import { HiPencil } from 'react-icons/hi';

const SectionTitle: FunctionComponent<SectionTitleProps> = ({
    title = 'Section Title',
    editableTitle,
    type,
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
    const inputRef = useRef<HTMLDivElement | null>(null);

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

    // Helper Text
    let helper: string | undefined = undefined;

    if (type === 'education') helper = 'Ex: Education';
    else if (type === 'experience') helper = 'Ex: Working Experience';
    else if (type === 'skill') helper = 'Ex: Skills';

    return (
        <CardHeader
            action={
                editableTitle && (
                    <IconButton color="primary" onClick={clickEdit}>
                        {showTitle && <HiPencil />}
                    </IconButton>
                )
            }
            autoFocus
            title={
                showTitle ? (
                    <Typography
                        variant={'h4'}
                        component={'h4'}
                        sx={{ fontWeight: 600 }}
                    >
                        {sectionTitle}
                    </Typography>
                ) : (
                    <form onSubmit={handleSubmit(changeTitle)}>
                        <TextField
                            label="Section Title"
                            error={
                                errors?.[title.split(' ').join('-')]?.message
                            }
                            helperText={
                                errors?.[title.split(' ').join('-')]?.message ||
                                helper
                            }
                            {...rest}
                            ref={(e) => {
                                ref(e);
                                inputRef.current = e;
                            }}
                            variant={'standard'}
                        />
                    </form>
                )
            }
        />
    );
};

export default SectionTitle;

interface SectionTitleProps {
    title?: string;
    editableTitle?: boolean;
    type?: 'education' | 'experience' | 'skill' | 'header';
}
