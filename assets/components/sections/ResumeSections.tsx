import type { FunctionComponent } from 'react';

import { Fragment } from 'react';

// MUI Import
import { Box, Button, ButtonGroup } from '@mui/material';

// Component Import
import EducationSection from './EducationSection';

// React Hook Form Import
import { useFieldArray, useForm } from 'react-hook-form';

const ResumeSections: FunctionComponent = () => {
    const { control } = useForm();
    const { append, fields, remove } = useFieldArray({
        control,
        name: 'sections',
    });

    const addEducation = (): void => {
        append({ education: true });
    };

    return (
        <>
            {fields.map((item, index) => (
                <Fragment key={item.id}>
                    <Box sx={{ my: 4 }}>
                        <Button
                            variant="outlined"
                            sx={{ px: 2 }}
                            onClick={() => remove(index)}
                        >
                            Remove Section
                        </Button>
                        {item.education && <EducationSection />}
                    </Box>
                </Fragment>
            ))}

            <Box sx={{ my: 5 }}>
                <ButtonGroup
                    variant="outlined"
                    sx={{ display: 'flex', justifyContent: 'center', my: 2 }}
                >
                    <Button onClick={addEducation}>
                        Add Education Section
                    </Button>
                    <Button>Add Experience Section</Button>
                    <Button>Add Skill Section</Button>
                </ButtonGroup>
            </Box>
        </>
    );
};

export default ResumeSections;
