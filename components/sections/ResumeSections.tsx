import type { FunctionComponent } from 'react';

import { Fragment } from 'react';

// MUI Import
import { Box, Button, ButtonGroup, Grid } from '@mui/material';

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
    const {
        append: appendEducation,
        fields: fieldsEducation,
        remove: removeEducation,
    } = useFieldArray({
        control,
        name: 'education',
    });

    const addEducation = (): void => {
        appendEducation({ education: true });
    };

    return (
        <>
            <Grid container spacing={4} sx={{ mt: 2 }}>
                {fieldsEducation.map((item, index) => (
                    <Grid key={item.id} xs={12} item>
                        <EducationSection
                            remove={() => removeEducation(index)}
                        />
                    </Grid>
                ))}
            </Grid>
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
